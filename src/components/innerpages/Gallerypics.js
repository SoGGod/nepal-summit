import React from "react";

import DztImageGalleryComponent from "reactjs-image-gallery";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
function Gallerypics() {

    var data = [
        {
          url:
            "./images/slid1.jpg",
          title: "Lorem Ipsum",
          thumbUrl:
            "./images/slid1.jpg"
        },
        {
          url:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1526485856375-9110812fbf35?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1423994485548-7c3cf5c99cfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80"
        },
  
        {
          url:
            "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1444465693019-aa0b6392460d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1436968188282-5dc61aae3d81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        },
        {
          url:
            "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80",
          title: "Lorem Ipsum",
          thumbUrl:
            "https://images.unsplash.com/photo-1446488547543-78c11468449a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=250&q=80"
        }
      ];

    return (
        
           <>
              <Header/>
      
        <div className="gallerypics" style={{margin:'20px 20px', marginTop:'20px'}}>
            <DztImageGalleryComponent images={data}/>
        </div>
        <Footer/>
        </>
    )
}

export default Gallerypics
