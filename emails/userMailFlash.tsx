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
interface userMailFlashProps {
  name?: string;
  surname?: string;
}

export const userMailFlash = ({ name, surname }: userMailFlashProps) => {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Preview>Validation de demande de réservation</Preview>
        <Body style={main} className="text-pink-200 bg-[#1f0025]">
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
                  <Heading
                    style={{
                      fontSize: 32,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Salut {name} {surname},
                  </Heading>
                  <Heading
                    as="h2"
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    Je t&apos;informe que ton formulaire a bien été envoyé !
                  </Heading>
                </Column>
              </Row>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

userMailFlash.PreviewProps = {
  userFirstName: "Alan",
  userName: "Merik",
} as userMailFlashProps;

export default userMailFlash;

const main = {
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const logo = {
  padding: "30px 20px",
};

const content = {
  border: "1px solid rgb(0,0,0, 0.1)",
  borderRadius: "3px",
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
