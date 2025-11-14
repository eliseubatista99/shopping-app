import { AppLayout } from "@components";
import { Typography } from "@eliseubatista99/react-scaffold-core";
import { useSearchPageHelper } from "./search.hook";

export const SearchMobile: React.FC = () => {
  const { previousSearches, submitSearch } = useSearchPageHelper();

  const previousSearchesJSX = previousSearches?.map((p, index) => (
    <div
      style={{
        width: "100%",
        flexDirection: "row",
        borderTop: index === 0 ? undefined : "1px solid #5f5f5f54",
        padding: "10px 15px",
        gap: "20px",
      }}
      onClick={() => submitSearch(p)}
    >
      <Typography styles={{ fontSize: "24px", fontWeight: 500 }}>
        {"⌕"}
      </Typography>
      <Typography styles={{ lineHeight: 2 }}>{p}</Typography>
    </div>
  ));

  return (
    <AppLayout
      pageStyles={{
        padding: 0,
      }}
      appHeader={{
        withBack: true,
        styles: {
          background: "#0a0d42ff",
        },
      }}
    >
      <div style={{ width: "100%", flexDirection: "column" }}>
        {previousSearchesJSX}
      </div>
    </AppLayout>
  );
};
