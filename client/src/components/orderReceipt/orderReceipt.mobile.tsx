import { Document, Page, Text, View } from "@react-pdf/renderer";
import type { OrderReceiptProps } from "./orderReceipt";
import { useOrderReceiptHelper } from "./orderReceipt.hook";

export const OrderReceiptMobile = (props: OrderReceiptProps) => {
  const { i18n } = useOrderReceiptHelper(props);
  const { order } = props;

  const separator = (
    <View
      style={{
        width: "100%",
        backgroundColor: "#e5e7eb",
        height: "1px",
        marginTop: "20px",
      }}
    />
  );

  const orderInfoLine = (text: string, value: string) => (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          gap: "5px",
          alignItems: "center",
        }}
      >
        <Text style={{ width: "30%", fontSize: "14px", fontWeight: 600 }}>
          {text}
        </Text>
        <Text style={{ fontSize: "14px", fontWeight: 400 }}>{value}</Text>
      </View>
    </>
  );

  const productColumn = (texts: string[]) => (
    <>
      <View
        style={{
          gap: "5px",
          justifyContent: "center",
          fontSize: "14px",
          fontWeight: "14px",
        }}
      >
        {texts.map((t, index) => (
          <Text
            key={index}
            style={index === 0 ? { fontWeight: 600 } : undefined}
          >
            {t}
          </Text>
        ))}
      </View>
    </>
  );

  const totalCostsLine = (text: string, value: string) => (
    <>
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          gap: "5px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ width: "30%", fontSize: "14px", fontWeight: 600 }}>
          {text}
        </Text>
        <Text style={{ fontSize: "14px", fontWeight: 400 }}>{value}</Text>
      </View>
    </>
  );

  return (
    <>
      {order && (
        <Document
          title={i18n.title}
          author="eliseubatista99"
          style={{
            width: "100%",
            height: "100%",
            position: "relative",
            flex: 1,
          }}
        >
          <Page
            size="A4"
            style={{
              padding: 30,
              fontSize: 10,
              fontFamily: "Helvetica",
              backgroundColor: "#ffffff",
            }}
          >
            <View
              style={{
                marginBottom: 18,
                paddingBottom: 10,
                borderBottomWidth: 2,
                borderBottomColor: "#e5e7eb",
                borderBottomStyle: "solid",
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: "bold", color: "#0f172a" }}
              >
                {i18n.title}
              </Text>
            </View>
            <View
              style={{
                width: "100%",
                marginTop: "20px",
                display: "flex",
                gap: "12px",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: "14px" }}>
                {`${order.address.name}\n${order.address.street}\n${order.address.location}, ${order.address.city}, ${order.address.country}, ${order.address.postalCode}\n${order.address.countryCode}`}
              </Text>
              <View
                style={{
                  alignItems: "center",
                  display: "flex",
                  gap: "12px",
                  flexDirection: "row",
                }}
              >
                <Text style={{ alignItems: "center" }}>{i18n.status.text}</Text>
                <Text
                  style={{
                    alignItems: "center",
                    padding: "5px 10px",
                    borderRadius: "12px",
                    backgroundColor: "#b9b3b3ff",
                  }}
                >
                  {i18n.status.value}
                </Text>
              </View>
            </View>
            {separator}
            <View
              style={{
                width: "100%",
                gap: "5px",
                marginTop: "20px",
              }}
            >
              {orderInfoLine(i18n.date.text, i18n.date.value)}
              {orderInfoLine(i18n.number, order.id || "")}
            </View>
            {separator}

            <Text
              style={{ fontSize: "16px", fontWeight: 600, marginTop: "20px" }}
            >
              {i18n.details.title}
            </Text>

            <View
              style={{
                width: "100%",
                gap: "20px",
                marginTop: "20px",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  gap: "20px",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                {productColumn([
                  i18n.details.product,
                  ...(order.products || []).map((p) => p.name || ""),
                ])}
              </View>

              <View
                style={{
                  gap: "20px",
                  flexDirection: "row",
                  alignItems: "flex-end",
                }}
              >
                {productColumn([
                  i18n.details.price.text,
                  ...(order.products || []).map((p) =>
                    i18n.details.price.value(p)
                  ),
                ])}

                {productColumn([
                  i18n.details.shipping.text,
                  ...(order.products || []).map((p) =>
                    i18n.details.shipping.value(p)
                  ),
                ])}

                {productColumn([
                  i18n.details.discount.text,
                  ...(order.products || []).map((p) =>
                    i18n.details.discount.value(p)
                  ),
                ])}

                {productColumn([
                  i18n.details.total.text,
                  ...(order.products || []).map((p) =>
                    i18n.details.total.value(p)
                  ),
                ])}
              </View>
            </View>

            {separator}
            <View
              style={{
                width: "50%",
                marginLeft: "auto",
                gap: "5px",
                alignItems: "flex-end",
                marginTop: "20px",
              }}
            >
              <Text
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  width: "100%",
                  padding: "0 0 20px 0",
                }}
              >
                {i18n.summary.title}
              </Text>
              {totalCostsLine(
                i18n.summary.products.text,
                i18n.summary.products.value
              )}
              {totalCostsLine(
                i18n.summary.shipping.text,
                i18n.summary.shipping.value
              )}
              {totalCostsLine(
                i18n.summary.discounts.text,
                i18n.summary.discounts.value
              )}
              {totalCostsLine(
                i18n.summary.total.text,
                i18n.summary.total.value
              )}
            </View>
          </Page>
        </Document>
      )}
    </>
  );
};
