import Image from "next/image";
import styled from "styled-components";
import Card from "../Common/Card"
import Subtitle from "../Common/Subtitle";
import Text from "../Common/Text";
import Title from "../Common/Title";

const CardItemContent = styled.div`
  padding: ${props => props.theme.common.gap};
  display: flex;
  flex-direction: column;
`

const CardLink = styled.a`
  &:hover ${Card} {
    opacity: 0.8;
  }
`

const CardItem: React.FC<ICardItem> = ({ banner, description, title, url }) => {
  return (
    <CardLink href={url} rel="noopener noreferrer" target="_blank">
      <Card noPadding>
        {!!banner && <Image width={700} height={300} src={banner} alt={title} objectFit="cover" quality={100} />}
        <CardItemContent>
          <Title>{title}</Title>
          <Subtitle>{url}</Subtitle>
          <Text>{description}</Text>
        </CardItemContent>
      </Card>
    </CardLink>
  )
}

export default CardItem;
