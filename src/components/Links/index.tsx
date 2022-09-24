import SectionTitle from "../Common/SectionTitle";
import Link from "./Link";
import LinksHolder from "./LinksHolder";
import { Fragment } from "react";

const Links: React.FC<{ links: ILink[] }> = ({ links }) => {
  return (
    <>
      {links.map((link) => (
        <Fragment key={link.id}>
          {!!link.title && <SectionTitle>{link.title}</SectionTitle>}
          <LinksHolder>
            {link.items.map((linkItem) => (
              <Link key={linkItem.id} {...linkItem} />
            ))}
          </LinksHolder>
        </Fragment>
      ))}
    </>
  );
};

export default Links;
