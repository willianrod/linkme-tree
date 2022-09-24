import Text from "../Common/Text"
import Avatar from "./Avatar"
import Card from "../Common/Card"
import Subtitle from "../Common/Subtitle"
import Title from "../Common/Title"

const About: React.FC<IAbout> = ({ name, occupancy, about, avatar }) => {
  return (
    <Card>
      <Avatar objectFit="cover" src={avatar} width={170} height={170} alt="avatar" />
      <Title>{name}</Title>
      <Subtitle>{occupancy}</Subtitle>
      <Text>{about}</Text>
    </Card>
  )
}

export default About
