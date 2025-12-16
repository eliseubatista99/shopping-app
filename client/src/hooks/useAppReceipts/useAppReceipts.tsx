import type { OrderDetailDto } from "@api";
import { OrderReceipt } from "@components";
import { usePdfGenerator } from "@eliseubatista99/react-scaffold-pdf";

export const useAppReceipts = () => {
  const { generatePdf, downloadPdf, previewPdf } = usePdfGenerator();

  const generateReceipt = async (data: OrderDetailDto) => {
    const result = await generatePdf(<OrderReceipt order={data} />);

    return {
      error: result.error,
      size: result.size,
      url: result.url,
    };
  };

  const downloadReceipt = async (data: OrderDetailDto) => {
    const result = await generateReceipt(data);

    if (result.url) {
      downloadPdf(result.url, `Receipt_${data.id}`);
    }
  };

  const previewReceipt = async (data: OrderDetailDto) => {
    const result = await generateReceipt(data);

    console.log("Previewing receipt for order:", result);
    if (result.url) {
      previewPdf(result.url);
    }
  };

  return {
    generateReceipt,
    downloadReceipt,
    previewReceipt,
  };
};
