import { OffersGroupBlock } from "../offersGroup";
import { useGroupsListBlockHelper } from "./groupsList.hook";

export const GroupsListBlockMobile: React.FC = () => {
  const { groupsList } = useGroupsListBlockHelper();

  const groupsJSX = groupsList.map((g) => (
    <OffersGroupBlock key={g.title} title={g.title} products={g.products} />
  ));

  return (
    <div style={{ width: "100%", gap: "30px", marginTop: "30px" }}>
      {groupsJSX}
    </div>
  );
};
