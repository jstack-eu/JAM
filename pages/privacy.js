import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getGeneralInfo, getNavPages } from "../services/contentful";
import Layout from "../domains/general/molecules/layout";
import SectionGenerator from "../domains/general/molecules/sectionGenerator";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }) {
  const info = await getGeneralInfo();
  const pages = await getNavPages();

  return {
    props: {
      info: info,
      pages: pages.map((p) => {
        p.label = p.fields[`title${locale[0].toUpperCase() + locale.slice(1)}`];
        if (!p.label) p.label = p.fields.titleNl || "untitled";
        return p;
      }),
    },
  };
}

export const Privacy = ({ info, pages }) => {
  const router = useRouter();

  return (
    <div>
      <Layout pages={pages} info={info} inversedHeader>
        <div className="container">
          <h1>Privacy Policies for DVHydraulics</h1>

          <span className="eng">
            <span className="eng">
              English:
              <p>
                <a
                  href="files/Privacy%20statement%20-%20concise%20version%20-%20EN%20-%20250518.docx"
                  download
                >
                  Privacy statement - concise version
                </a>
              </p>
              <p>
                <a
                  href="files/Privacy%20statement%20customers-%20EN%20-%20250518.doc"
                  download
                >
                  Privacy statement customers
                </a>
              </p>
              <p>
                <a
                  href="files/Privacy%20statement%20suppliers-%20EN%20-%20250518.doc"
                  download
                >
                  Privacy statement suppliers
                </a>
              </p>
            </span>
          </span>

          <span className="nl">
            Nederlands:
            <p>
              <a
                href="files/Privacyverklaring-beknopt%20-%20250518.docx"
                download
              >
                Privacyverklaring - beknopt
              </a>
            </p>
            <p>
              <a
                href="files/Privacyverklaring%20klanten%20-%20250518.doc"
                download
              >
                Privacyverklaring klanten
              </a>
            </p>
            <p>
              <a
                href="files/Privacyverklaring%20leveranciers%20-%20250518.doc"
                download
              >
                Privacyverklaring leveranciers
              </a>
            </p>
          </span>

          <span className="fr">
            Français
            <p>
              <a
                href="files/Déclaration%20GDPR%20-%20version%20abrégée%20-%20FR%20-%20250518.docx"
                download
              >
                Déclaration GDPR - version abrégée
              </a>
            </p>
            <p>
              <a
                href="files/Déclaration%20GDPR%20clients%20-%20FR%20-%20250518.doc"
                download
              >
                Déclaration GDPR clients
              </a>
            </p>
            <p>
              <a
                href="files/Déclaration%20GDPR%20%20fournisseurs%20-%20FR%20-%20250518.doc"
                download
              >
                Déclaration GDPR fournisseurs
              </a>
            </p>
          </span>

          {/* <h1>Cookie Policy for DVHydraulics</h1>

          <p>
            This is the Cookie Policy for DVHydraulics, accessible from
            www.dvhydraulics.be
          </p>

          <p>
            <strong>What Are Cookies</strong>
          </p>

          <p>
            As is common practice with almost all professional websites this
            site uses cookies, which are tiny files that are downloaded to your
            computer, to improve your experience. This page describes what
            information they gather, how we use it and why we sometimes need to
            store these cookies. We will also share how you can prevent these
            cookies from being stored however this may downgrade or 'break'
            certain elements of the sites functionality.
          </p>

          <p>
            For more general information on cookies see the Wikipedia article on
            HTTP Cookies.
          </p>

          <p>
            <strong>How We Use Cookies</strong>
          </p>

          <p>
            We use cookies for a variety of reasons detailed below.
            Unfortunately in most cases there are no industry standard options
            for disabling cookies without completely disabling the functionality
            and features they add to this site. It is recommended that you leave
            on all cookies if you are not sure whether you need them or not in
            case they are used to provide a service that you use.
          </p>

          <p>
            <strong>Disabling Cookies</strong>
          </p>

          <p>
            You can prevent the setting of cookies by adjusting the settings on
            your browser (see your browser Help for how to do this). Be aware
            that disabling cookies will affect the functionality of this and
            many other websites that you visit. Disabling cookies will usually
            result in also disabling certain functionality and features of the
            this site. Therefore it is recommended that you do not disable
            cookies.
          </p>

          <p>
            <strong>The Cookies We Set</strong>
          </p>

          <ul>
            <li>
              <p>Forms related cookies</p>
              <p>
                When you submit data to through a form such as those found on
                contact pages or comment forms cookies may be set to remember
                your user details for future correspondence.
              </p>
            </li>

            <li>
              <p>Site preferences cookies</p>
              <p>
                In order to provide you with a great experience on this site we
                provide the functionality to set your preferences for how this
                site runs when you use it. In order to remember your preferences
                we need to set cookies so that this information can be called
                whenever you interact with a page is affected by your
                preferences.
              </p>
            </li>
          </ul>

          <p>
            <strong>Third Party Cookies</strong>
          </p>

          <p>
            In some special cases we also use cookies provided by trusted third
            parties. The following section details which third party cookies you
            might encounter through this site.
          </p>

          <ul>
            <li>
              <p>
                This site uses Google Analytics which is one of the most
                widespread and trusted analytics solution on the web for helping
                us to understand how you use the site and ways that we can
                improve your experience. These cookies may track things such as
                how long you spend on the site and the pages that you visit so
                we can continue to produce engaging content.
              </p>
              <p>
                For more information on Google Analytics cookies, see the
                official Google Analytics page.
              </p>
            </li>

            <li>
              <p>
                From time to time we test new features and make subtle changes
                to the way that the site is delivered. When we are still testing
                new features these cookies may be used to ensure that you
                receive a consistent experience whilst on the site whilst
                ensuring we understand which optimisations our users appreciate
                the most.
              </p>
            </li>

            <li>
              <p>
                We use adverts to offset the costs of running this site and
                provide funding for further development. The behavioural
                advertising cookies used by this site are designed to ensure
                that we provide you with the most relevant adverts where
                possible by anonymously tracking your interests and presenting
                similar things that may be of interest.
              </p>
            </li>
          </ul>

          <p>
            <strong>More Information</strong>
          </p>

          <p>
            Hopefully that has clarified things for you and as was previously
            mentioned if there is something that you aren't sure whether you
            need or not it's usually safer to leave cookies enabled in case it
            does interact with one of the features you use on our site.{" "}
            <a href="https://cookiepolicygenerator.com">
              This Cookies Policy was created with the help of the
              CookiePolicyGenerator.com
            </a>
          </p>

          <p>
            However if you are still looking for more information then you can
            contact us through one of our preferred contact methods:
          </p>

          <ul>
            <li>
              <p>Forms related cookies</p>
              <p>
                When you submit data to through a form such as those found on
                contact pages or comment forms cookies may be set to remember
                your user details for future correspondence.
              </p>
            </li>
          </ul>
        </div> */}
        </div>
      </Layout>
      <style jsx>{`
        .container {
          padding: 80px;
        }
      `}</style>
    </div>
  );
};

export default Privacy;
