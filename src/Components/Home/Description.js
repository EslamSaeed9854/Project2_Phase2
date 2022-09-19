import React from "react";
import Description_Item from "./Description_Item";
function Description() {
  function dis_apear_btn() {
    document.getElementById("btn1").style.display = "none";
    document.getElementById("disc1").style.display = "none";
    document.getElementById("icn1").style.display = "none";
  }
  return (
    <div>
      <th class="col-7" style={{ fontSize: "28px" }}>
        {" "}
        Description
      </th>
      <span id="disc1">
        Do you want to become a programmer? Do you want to learn how to create
        games, automate your browser, visualize data, and much more? If you’re
        looking to learn Python for the very first time or need a quick
        brush-up, this is the course for you! Python has rapidly become one of
        <br></br>
      </span>
        <button
          class=" fw-bold btn text-decoration-underline"
          data-bs-toggle="collapse"
          href="#collapseExample"
          role="button"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{
            padding: "0px",
            fontSize: "18px",
            border: "none",
            background: "white",
            color: "blueviolet",
          }}
          id="btn1"
          onClick={dis_apear_btn}
        >
          Expand more
          
        </button>
      <i id = "icn1" class="material-icons" style= {{verticalAlign: "middle" ,color: "blueviolet", fontSize: "22px"}}>expand_more</i>
      <div class="collapse" id="collapseExample">
        <span class="" style={{ border: "none" }}>
          Do you want to become a programmer? Do you want to learn how to create
          games, automate your browser, visualize data, and much more? If you’re
          looking to learn Python for the very first time or need a quick
          brush-up, this is the course for you! Python has rapidly become one of
          the most popular programming languages around the world. Compared to
          other languages such as Java or C++, Python consistently outranks and
          outperforms these languages in demand from businesses and job
          availability. The average Python developer makes over $100,000 - this
          number is only going to grow in the coming years. The best part?
          Python is one of the easiest coding languages to learn right now. It
          doesn’t matter if you have no programming experience or are unfamiliar
          with the syntax of Python. By the time you finish this course, you'll
          be an absolute pro at programming! This course will cover all the
          basics and several advanced concepts of Python. We’ll go over:
        </span>
        <br></br>
        <br></br>
      </div>
      <ul>
        <Description_Item name="The fundamentals of Python programming" />
        <Description_Item name="Writing and Reading to Files" />
        <Description_Item name="Automation of Word and Excel Files" />
        <Description_Item name="Web scraping with BeautifulSoup4" />
        <Description_Item name="Browser automation with Selenium" />
        <Description_Item name="Data Analysis and Visualization with MatPlotLib" />
        <Description_Item name="Regex parsing and Task Management" />
        <Description_Item name="GUI and Gaming with Tkinter" />
        <Description_Item name="And much more!" />
      </ul>
    </div>
  );
}

export default Description;
