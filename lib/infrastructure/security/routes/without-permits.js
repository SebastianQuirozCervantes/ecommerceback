// Define Services that doesn't need permits
export default [
    { resource: /^\/api\/auth\/sign-in$/, methods: ['POST'] },
    { resource: /^\/api\/products\/$/, methods: ['GET'] },
    { resource: /^\/api\/categories\/$/, methods: ['GET'] },
  ];
  