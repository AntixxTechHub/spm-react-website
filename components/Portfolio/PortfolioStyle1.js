import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";

const PortfolioStyle1 = (props) => {
 /* const [portfolios, setPortfolios] = React.useState();
  const [header, setHeader] = React.useState();
  
  var filterData = []
  var headers = []
  React.useEffect(() => {
    const getPortfolios = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/portfolios?populate=*`
      );

      const Header = await axios.get(
        `${baseApiUrl}/api/pricing-feature?populate=*`
      );

    
      await Header.data.data.attributes.FeaturesList.forEach((element) => {
        console.log("element", element);
        // console.log("props.flag", props.flag);
        if (element.flag == props.flag) {
          headers.push(element.title)
          headers.push(element.shortText)
        }
      });
      console.log("header===>>",headers)
      setHeader(headers)

      await response.data.data.forEach((element) => {
        console.log("asakaksmaksa element.attributes.flag", element.attributes.flag)
       
        if (element.attributes.flag == props.flag) {
          filterData.push(element)
          
        }
      });
      console.log("portfolioxsd,s,as;,a;sa,aaaaaaaaaaaaaaaas;,headersheadersheadersheaderssaas", headers);
      setPortfolios(filterData);
    };
    getPortfolios();
  }, []);*/

  return (
    <>
    <div></div>
    </>
  );
};

export default PortfolioStyle1;
