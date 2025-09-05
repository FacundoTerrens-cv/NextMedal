// Script para migrar objetos de traducción a strings simples
// Ejecutar con: node scripts/migrate-translations.js

const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN, // Necesitarás un token con permisos de escritura
  useCdn: false,
  apiVersion: '2024-01-01',
});

async function migrateTranslations() {
  try {
    console.log('🔄 Iniciando migración de traducciones...');

    // Buscar todos los documentos que contengan objetos de traducción
    const documents = await client.fetch(`
      *[_type in ["page", "blog.post", "site"] && defined(modules)] {
        _id,
        _type,
        modules
      }
    `);

    console.log(`📄 Encontrados ${documents.length} documentos para procesar`);

    for (const doc of documents) {
      if (!doc.modules) continue;

      let hasChanges = false;
      const updatedModules = doc.modules.map(module => {
        if (module._type === 'services-section') {
          const updatedModule = { ...module };
          
          // Migrar pretitle
          if (module.pretitle && typeof module.pretitle === 'object' && module.pretitle._type) {
            updatedModule.pretitle = module.pretitle.no || module.pretitle.en || '';
            hasChanges = true;
            console.log(`✅ Migrado pretitle en ${doc._id}`);
          }
          
          // Migrar title
          if (module.title && typeof module.title === 'object' && module.title._type) {
            updatedModule.title = module.title.no || module.title.en || '';
            hasChanges = true;
            console.log(`✅ Migrado title en ${doc._id}`);
          }
          
          // Migrar subtitle
          if (module.subtitle && typeof module.subtitle === 'object' && module.subtitle._type) {
            updatedModule.subtitle = module.subtitle.no || module.subtitle.en || '';
            hasChanges = true;
            console.log(`✅ Migrado subtitle en ${doc._id}`);
          }
          
          // Migrar services
          if (module.services && Array.isArray(module.services)) {
            updatedModule.services = module.services.map(service => {
              const updatedService = { ...service };
              
              if (service.title && typeof service.title === 'object' && service.title._type) {
                updatedService.title = service.title.no || service.title.en || '';
                hasChanges = true;
              }
              
              if (service.description && typeof service.description === 'object' && service.description._type) {
                updatedService.description = service.description.no || service.description.en || '';
                hasChanges = true;
              }
              
              if (service.features && Array.isArray(service.features)) {
                updatedService.features = service.features.map(feature => {
                  if (typeof feature === 'object' && feature._type) {
                    hasChanges = true;
                    return feature.no || feature.en || '';
                  }
                  return feature;
                });
              }
              
              return updatedService;
            });
          }
          
          return updatedModule;
        }
        
        return module;
      });

      if (hasChanges) {
        await client
          .patch(doc._id)
          .set({ modules: updatedModules })
          .commit();
        
        console.log(`✅ Documento ${doc._id} actualizado exitosamente`);
      }
    }

    console.log('🎉 Migración completada exitosamente!');
    
  } catch (error) {
    console.error('❌ Error durante la migración:', error);
  }
}

// Ejecutar migración
migrateTranslations();
