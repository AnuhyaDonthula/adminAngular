import internal from "stream";

export interface IProduct {
    productId: number;
    subCategoryId:number;
    productName: string;
    price: number;
    description:string;
    stockQuantity:number;
    productPhoto:File;

    // Add any other properties related to a product
  }
  