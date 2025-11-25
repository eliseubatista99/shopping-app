import { Image, Typography } from "@eliseubatista99/react-scaffold-core";
import type { Key } from "react";
import { useFavoritesBlockHelper } from "./favorites.hook";

export const FavoritesBlockMobile: React.FC = () => {
  const { i18n, favorites, onClickSeeAll } = useFavoritesBlockHelper();

  const box = (
    key: Key,
    content: React.ReactNode,
    styles?: React.CSSProperties
  ) => (
    <div
      key={key}
      style={{
        width: "80px",
        height: "80px",
        borderRadius: "10px",
        background: "#eaeaeaff",
        padding: "10px",
        alignItems: "center",
        justifyContent: "center",
        ...styles,
      }}
    >
      {content}
    </div>
  );

  const favoriteImages = favorites.images.map((f, index) =>
    box(
      index,
      <Image
        key={index}
        src={f}
        styles={{
          objectFit: "contain",
          mixBlendMode: "multiply",
          width: "100%",
          height: "100%",
        }}
      />
    )
  );

  return (
    <>
      {(favorites?.count || 0) > 0 && (
        <div style={{ width: "100%", marginTop: "20px" }}>
          <div
            style={{
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography styles={{ fontSize: "20px", fontWeight: 600 }}>
              {i18n.title}
            </Typography>
            <div onClick={() => onClickSeeAll()} style={{ color: "#000ac1ff" }}>
              <Typography>{i18n.seeAll}</Typography>
            </div>
          </div>
          <div
            onClick={() => onClickSeeAll()}
            style={{
              width: "100%",
              border: "1px solid #a2a2a2ff",
              borderRadius: "20px",
              flexDirection: "row",
              justifyContent: "flex-end",
              padding: "20px",
              gap: "5px",
              marginTop: "20px",
            }}
          >
            {favoriteImages}
            {favorites.remaining > 0 &&
              box(
                "remaining",
                <Typography>{`+${favorites.remaining}`}</Typography>,
                {
                  width: "50px",
                }
              )}
          </div>
        </div>
      )}
    </>
  );
};
