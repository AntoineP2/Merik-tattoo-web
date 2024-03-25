import {
  CustomTattooFormInputs,
  DISPONIBILITY_ENUM,
  PLACEMENT_ENUM,
  TATTOO_SIZE_ENUM,
} from "@/utils/enum";
import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";

export const recapMailCustom = ({
  name,
  surname,
  email,
  phone,
  description,
  size,
  placement,
  disponibility,
}: CustomTattooFormInputs) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>CUSTOM - RECAP</Preview>
        <Body style={main} className="text-pink-200 bg-[#1f0025] mb-36">
          <Container className="mb-28">
            <Section>
              <Img
                src="https://i.ibb.co/CMLS7Dy/logo-merik.png"
                alt="logo"
                width="100"
                className="my-0 mx-auto"
              />
            </Section>

            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading className="text-2xl font-bold text-center">
                    Tattoo
                    <strong className="text-purple-400"> Personnalisé</strong>
                  </Heading>
                  <Container className="bg-[#430050] rounded-lg shadow-lg">
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Nom : </span>{" "}
                      <span>
                        {name} {surname}{" "}
                      </span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Email : </span>{" "}
                      <span>{email} </span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Téléphone : </span>{" "}
                      <span>{phone}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Emplacement : </span>{" "}
                      <span>{placement}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Description : </span>{" "}
                      <span>{description}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Taille : </span>{" "}
                      <span>{size}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Dispo : </span>{" "}
                      <span>{disponibility}</span>
                    </Text>
                  </Container>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

recapMailCustom.PreviewProps = {
  name: "Alan",
  surname: "Merik",
  email: "antoinePado@gmail.com",
  phone: "0606060606",
  size: TATTOO_SIZE_ENUM.MEDIUM,
  placement: PLACEMENT_ENUM.ARM,
  disponibility: DISPONIBILITY_ENUM.THREE_MONTHS,
  description:
    "Excogitatum est super his, ut homines quidam ignoti, vilitate ipsa parum cavendi ad colligendos rumores per Antiochiae latera cuncta destinarentur relaturi quae audirent. hi peragranter et dissimulanter honoratorum circulis adsistendo pervadendoque divites domus egentium habitu quicquid noscere poterant vel audire latenter intromissi per posticas in regiam nuntiabant, id observantes conspiratione concordi, ut fingerent quaedam et cognita duplicarent in peius, laudes vero supprimerent Caesaris, quas invitis conpluribus formido malorum inpendentium exprimebat.",
} as CustomTattooFormInputs;

export default recapMailCustom;

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  padding: "30px 20px",
};

const content = {
  overflow: "hidden",
};

const image = {
  display: "flex",
  justifyContent: "center",
  itemAlign: "center",
};

const boxInfos = {
  padding: "20px",
};

const containerImageFooter = {
  padding: "45px 0 0 0",
};
