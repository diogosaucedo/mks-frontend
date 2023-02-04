import { IBoxModel, IDisplay } from "@/interfaces";

type CenterProps = {
  children: React.ReactNode;
} & IBoxModel & IDisplay;

export default CenterProps;
