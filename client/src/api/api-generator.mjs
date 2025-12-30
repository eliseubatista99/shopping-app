// biome-ignore lint/correctness/noNodejsModules: <explanation>
import path from "node:path";
import { generateApi } from "swagger-typescript-api";

generateApi({
  fileName: "swagger-models.ts",
  output: path.resolve(process.cwd(), "./src/api/models"),
  input: path.resolve(process.cwd(), "./src/api/swagger.json"),
  generateResponses: true,
  generateRouteTypes: true,
  generateUnionEnums: true,
  generateClient: false,
  extractRequestParams: true,
  hooks: {
    onFormatTypeName: (_typeName, rawTypeName, _schemaType) => {
      const transformedRawTypeName = rawTypeName?.substring(
        rawTypeName?.lastIndexOf(".") + 1
      );
      return transformedRawTypeName;
    },
  },
});
