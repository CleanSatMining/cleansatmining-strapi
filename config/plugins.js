
module.exports = () => ({
    graphql: {
      enabled: true,
      config: {
        playgroundAlways: true,
        shadowCRUD: true,
        defaultLimit: 10,
        maxLimit: 20,
        apolloServer: {
          tracing: true,
        },
      }
    }
  })