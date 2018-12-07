import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BoxRules from '../components/BoxRules';

import borobudurImg from '../assets/img/borobudur.png';

const DescriptionPage = () => {
    return (
      <div className="page-description-flex">
        <Navbar />

        <section className="description-flex">

          <div className="section content-description">
            <div className="f3 pd-destination">Destination</div>
            <div className="f2 pd-place">Candi Borobudur</div>
            <div className="f4 pd-address"><i class='bx-fw bx bx-navigation'></i>Jalan Raya Borobudur, Jawa Tengah</div>
          </div>

        </section>

        <section>
          <div className="img-pd"></div>
          <div className="boxrules-pd"><BoxRules /></div>  
        </section>

        <section className="section pd-story">

            <div className="pd-story-title">Story</div>
            <div className="pd-story-desc">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionaryof over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.
            <br></br>
            <br></br>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionaryof over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</div>
            

        </section>

        <Footer />
      </div>
    );
}

export default DescriptionPage;
