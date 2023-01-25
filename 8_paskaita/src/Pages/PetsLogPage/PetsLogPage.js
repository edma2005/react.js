import CustomButton from "../../Components/CustomButton/CustomButton";
import Footer from "../../Components/Footer/Footer";
import TopBar from "../../Components/TopBar/TopBar";
import {
  ButtonDiv,
  ContentDiv,
  DisplayFilterDiv,
  H1,
  Header,
} from "./StyledPetsLogPage";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import LogsPageTable from "../../Components/LogsPageTable/LogsPageTable";
import { LogsAPI, MedsAPI } from "../../Conts/apis";

const PetsLogPage = () => {
  const { name, id } = useParams();
  const [logsFilter, setLogsFilter] = useState(true);
  const [prescFilter, setPrescFilter] = useState(true);
  const [logs, setLogs] = useState(undefined);
  //   const [presc, setPresc] = useState(undefined);
  const [meds, setMeds] = useState(undefined);
  console.log(`logs`, logs);
  console.log("meds", meds);

  useEffect(() => {
    fetch(`${LogsAPI}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setLogs(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [id]);

  useEffect(() => {
    fetch(`${MedsAPI}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMeds(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  //   useEffect(() => {
  //     fetch(`${PrescriptionsAPI}/${id}`, {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setPresc(data))
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //   }, [id]);

  return (
    <div>
      <TopBar />
      <ContentDiv>
        <Header>
          <H1>{name}: Medical History</H1>
          <ButtonDiv>
            <CustomButton variant="contained">Add Prescription</CustomButton>
            <CustomButton variant="outlined">Add Log</CustomButton>
          </ButtonDiv>
        </Header>
        <DisplayFilterDiv>
          <p>Display:</p>
          <CustomButton
            variant={logsFilter === true ? "contained" : "outlined"}
            onClick={() =>
              logsFilter === false ? setLogsFilter(true) : setLogsFilter(false)
            }
          >
            Logs
          </CustomButton>
          <CustomButton
            variant={prescFilter === true ? "contained" : "outlined"}
            onClick={() =>
              prescFilter === false
                ? setPrescFilter(true)
                : setPrescFilter(false)
            }
          >
            Prescriptions
          </CustomButton>
        </DisplayFilterDiv>
        {logsFilter && logs && <LogsPageTable type="log" arr={logs} />}
        {/* {prescFilter && presc && <LogsPageTable type="presc" arr={presc} />} */}
      </ContentDiv>
      <Footer />
    </div>
  );
};

export default PetsLogPage;
