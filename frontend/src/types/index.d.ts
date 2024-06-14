type CartItem = {
  id: number;
  product: ProductT;
  color: ColorT;
  quantity: number;
  quantity: number;
};

type ColorT = {
  id: number;
  name: string;
  hex_code: string;
  extra_cost: number;
};

type ProductT = {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  media: MediaT[];
  colors: ColorT[] | null;
};

type MediaT = {
  id: number;
  type: "image" | "video";
  file: string;
  alt: string;
};

type ReviewItemT = {
  author: string;
  profilePic: string;
  title: string;
  body: string;
  rate: number;
  date: string;
  reviewBy: string;
};

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
