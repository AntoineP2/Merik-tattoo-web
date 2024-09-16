import { DISPONIBILITY_ENUM, PLACEMENT_ENUM } from "@/utils/enum";
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
interface recapMailFlashProps {
  name?: string;
  surname?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  reference?: string;
  daysOfWeek?: string[];
  placement?: PLACEMENT_ENUM;
  disponibility?: DISPONIBILITY_ENUM;
}

export const recapMailFlash = ({
  name,
  surname,
  email,
  instagram,
  facebook,
  reference,
  placement,
  disponibility,
  daysOfWeek,
}: recapMailFlashProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>FLASH - RECAP</Preview>
        <Body style={main} className="text-pink-200 bg-[#1f0025] mb-36">
          <Container className="mb-28">
            <Section>
              <Img
                src="https://i.postimg.cc/cHChQYSM/logo-merik.png"
                alt="logo"
                width="100"
                className="my-0 mx-auto"
              />
            </Section>

            <Section style={content}>
              <Row style={{ ...boxInfos, paddingBottom: "0" }}>
                <Column>
                  <Heading className="text-2xl font-bold text-center">
                    FLASH Ref :{" "}
                    <strong className="text-purple-400">{reference}</strong>
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
                      <span className="font-bold mr-4">Instagram : </span>{" "}
                      <span>{instagram}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Facebook : </span>{" "}
                      <span>{facebook}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Emplacement : </span>{" "}
                      <span>{placement}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Dispo : </span>{" "}
                      <span>{disponibility}</span>
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Jour préferentiel : </span>{" "}
                      {daysOfWeek && daysOfWeek.map((day, index) => (<span key={index}>{day} </span>))}
                    </Text>
                    <Text className="pl-20 text-md">
                      <span className="font-bold mr-4">Référence : </span>{" "}
                      <span>{reference}</span>
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

recapMailFlash.PreviewProps = {
  name: "Alan",
  surname: "Merik",
  email: "antoinePado@gmail.com",
  facebook: "Antoine",
  instagram: "Pado",
  reference: "AEZ89D",
  daysOfWeek: ["Lundi", "Mardi"],
  placement: PLACEMENT_ENUM.ARM,
  disponibility: DISPONIBILITY_ENUM.THREE_MONTHS,
} as recapMailFlashProps;

export default recapMailFlash;

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
