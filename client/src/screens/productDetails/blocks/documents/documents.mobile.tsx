import { DocumentListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useDocumentsBlockHelper } from "./documents.hook";

export const DocumentsBlockMobile: React.FC = () => {
  const { i18n, docs } = useDocumentsBlockHelper();

  const docsJSX = docs.map((doc) => (
    <DocumentListItem key={doc.id} document={doc} />
  ));

  return (
    <>
      {docs.length > 0 && (
        <div>
          <Typography
            styles={{ fontSize: "20px", fontWeight: 600, marginTop: "30px" }}
          >
            {i18n.title}
          </Typography>
          <div>{docsJSX}</div>
        </div>
      )}
    </>
  );
};
