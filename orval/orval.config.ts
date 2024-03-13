export default {
  petstore: {
    input: "./src/swaggers/petstore.json",
    output: {
      target: "./src/api/petstore.ts",
      types: true,
      services: false,
      override: {
        mutator: {
          path: "./src/api/mutator/axiosInstance.ts",
          name: "axiosInstance",
        },
      },
    },
  },
};
