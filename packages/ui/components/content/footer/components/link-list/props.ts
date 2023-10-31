export default interface ILinkListProps {
  title: string;
  content: LinkData[];
}

interface LinkData {
  title: string;
  href: string;
}
