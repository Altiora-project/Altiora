type addressProps = string
type linksProps = { slug: string; title: string }

export interface FooterInfoBlockProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  addressDetails: addressProps[]
  linkList: linksProps[]
}
