import { memo } from "react";
import Firebase from "./Firebase";
import Supertest from "./Supertest";
import Swagger from "./Swagger";
import Storybook from "./Storybook";
import Redis from "./Redis";
import AntDesing from "./AntDesing";
import Apollo from "./Apollo";
import Tailwind from "./Tailwind";
import Contentful from "./Contentful";
import Cloudinary from "./Cloudinary";
import CSS from "./CSS";
import Cypress from "./Cypress";
import Express from "./Express";
import Git from "./Git";
import HTML from "./HTML";
import Javascript from "./Javascript";
import Jest from "./Jest";
import Puppeteer from "./Puppeteer";
import SchemaOrg from "./SchemaOrg";
import MaterialUI from "./MaterialUI";
import Lighthouse from "./Lighthouse";
import MongoDB from "./MongoDB";
import Next from "./Next";
import Node from "./Node";
import Nodemailer from "./Nodemailer";
import Prisma from "./Prisma";
import Postgresql from "./Postgresql";
import ReactTestingLibrary from "./ReactTestingLibrary";
import React from "./React";
import SocketIO from "./SocketIO";
import Mongoose from "./Mongoose";
import ReactQuery from "./ReactQuery";
import StyledComponents from "./StyledComponents";
import Wave from "./Wave";
import Typescript from "./Typescript";
import Auth0 from "./Auth0";
import NextAuth from "./NextAuth";
import Graphql from "./Graphql";
function TechLogo({ name }: { name: string }) {
  return name === "apollo" ? (
    <Apollo />
  ) : name === "cloudinary" ? (
    <Cloudinary />
  ) : name === "css" ? (
    <CSS />
  ) : name === "cypress" ? (
    <Cypress />
  ) : name === "express" ? (
    <Express />
  ) : name === "git" ? (
    <Git />
  ) : name === "graphql" ? (
    <Graphql />
  ) : name === "html" ? (
    <HTML />
  ) : name === "javascript" ? (
    <Javascript />
  ) : name === "jest" ? (
    <Jest />
  ) : name === "material-ui" ? (
    <MaterialUI />
  ) : name === "mongodb" ? (
    <MongoDB />
  ) : name === "mongoose" ? (
    <Mongoose />
  ) : name === "next-js" ? (
    <Next />
  ) : name === "node" ? (
    <Node />
  ) : name === "nodemailer" ? (
    <Nodemailer />
  ) : name === "postgresql" ? (
    <Postgresql />
  ) : name === "prisma" ? (
    <Prisma />
  ) : name === "react-testing-library" ? (
    <ReactTestingLibrary />
  ) : name === "react" ? (
    <React />
  ) : name === "socket-io" ? (
    <SocketIO />
  ) : name === "styled-components" ? (
    <StyledComponents />
  ) : name === "next-auth" ? (
    <NextAuth />
  ) : name === "tailwind" ? (
    <Tailwind />
  ) : name === "typescript" ? (
    <Typescript />
  ) : name === "contentful" ? (
    <Contentful />
  ) : name === "auth0" ? (
    <Auth0 />
  ) : name === "react-query" ? (
    <ReactQuery />
  ) : name === "lighthouse" ? (
    <Lighthouse />
  ) : name === "wave" ? (
    <Wave />
  ) : name === "schema-org" ? (
    <SchemaOrg />
  ) : name === "puppeteer" ? (
    <Puppeteer />
  ) : name === "ant-desing" ? (
    <AntDesing />
  ) : name === "redis" ? (
    <Redis />
  ) : name === "supertest" ? (
    <Supertest />
  ) : name === "swagger" ? (
    <Swagger />
  ) : name === "firebase" ? (
    <Firebase />
  ) : name === "storybook" ? (
    <Storybook />
  ) : null;
}

export default memo(TechLogo);
