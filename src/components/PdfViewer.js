import React, { useEffect, useState } from "react";
import "./PdfViewer.css";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap';
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

import pcamatlab from './../pdfs/pcamatlab.pdf'
import melectricity from './../pdfs/melectricity.pdf'
import soon from './../pdfs/soon.pdf'


const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  standardFontDataUrl: 'standard_fonts/',
};


function useWindowSize() {
  const [width, setSize] = useState(window.innerWidth)
  useEffect(()=>{
    const handleResize = () =>{
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  },[]);
  return width;
}

function ViewDoc(props) {
  const location = useLocation();
  const [numPages, setNumPages] = useState(null);
  const width = useWindowSize();
  const [loading, setLoading] = useState(false);
  const [pdfName, setPdfName] = useState(location.state.pdfName)
  const navigate = useNavigate();


  function getFile(pdfName) {
    if(pdfName==='pcamatlab'){
      return pcamatlab;
    }else if(pdfName==='melectricity'){
      return melectricity;
    }
   
  }
  useEffect(()=>{
    if (location.state.pdfName === null){
      setPdfName(localStorage.getItem("pdfName"))
    }else{
      localStorage.setItem("pdfName", location.state.pdfName)
    }
  },[])




  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function onLoading() {
    setLoading(false)
  }

  return (
    <div className="viewdoc">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Button variant="primary" onClick={() => navigate(-1)}>
            Back
          </Button>
        </Container>
      </Navbar>
      <Container className="co1">
        {loading ? 
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        :
        <Document
        file={getFile(pdfName)}
        onLoadProgress={onLoading}
        onLoadSuccess={onDocumentLoadSuccess}
        options={options}
        loading={<Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            scale='0.8'
            width={width}
          />
        ))}
      </Document>
      }
      </Container>
    </div>
  );
}

export default ViewDoc;
