type CartItem = {
  product: ProductItemT;
  quantity: number;
};

type ColorT = {
  colorHex: string;
  price: number;
};

type ProductItemT = {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
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
