import Icons from "../../../contents/icon/icons";

export default interface IStepCardProps {
  name: keyof typeof Icons;
  title: string;
  content: string;
}
