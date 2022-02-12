import React, { createContext,useState,useEffect } from 'react'; 
export const SearchContext = createContext()  

const SearchProvider = ({children}) => {  
    const [data,setData] =  useState([]);
    const [showModal,setShowModal] = useState(false);
    const [dataFollow,setDataFollow] = useState([]);
    useEffect(() => {
        var axios = require("axios").default; 
    
        var options = {
          method: 'GET',
          url: 'https://stock-data-yahoo-finance-alternative.p.rapidapi.com/v6/finance/quote/marketSummary',
          params: {region: 'US', lang: 'en'},
          headers: {
            'x-rapidapi-host': 'stock-data-yahoo-finance-alternative.p.rapidapi.com',
            'x-rapidapi-key': 'f473e9cc7dmsh05b69a030d8eb5dp159d51jsn8beedabfffe7'
          }
        };
        axios.request(options).then(function (response) { 
          setData(response.data.marketSummaryResponse.result); 
        }).catch(function (error) {
          console.error(error);
        });
      },[])
      const contextValues = {
          showModal,
          setShowModal, 
          dataFollow,
          setDataFollow,
          data,
      } 
    return ( 
        <SearchContext.Provider value={contextValues} >
            { children }
        </SearchContext.Provider>
     );
}
 
export default SearchProvider;