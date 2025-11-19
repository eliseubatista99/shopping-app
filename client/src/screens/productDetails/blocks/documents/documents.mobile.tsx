import { DocumentListItem } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useDocumentsBlockHelper } from "./documents.hook";

export const DocumentsBlockMobile: React.FC = () => {
  const { i18n, docs, onClickDocument } = useDocumentsBlockHelper();

  const docsJSX = docs.map((doc) => (
    <DocumentListItem
      key={doc.id}
      document={doc}
      onClick={() => onClickDocument(doc)}
    />
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
          <div style={{ width: "100%", marginTop: "10px", padding: "0 5px" }}>
            {docsJSX}
          </div>
        </div>
      )}
    </>
  );
};
