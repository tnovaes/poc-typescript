--
-- PostgreSQL database dump
--

-- Dumped from database version 12.15 (Ubuntu 12.15-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 15.3

-- Started on 2023-07-01 17:40:13

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: -
--

-- *not* creating schema, since initdb creates it


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 203 (class 1259 OID 16387)
-- Name: characters; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    name text,
    level integer,
    alive boolean
);


--
-- TOC entry 202 (class 1259 OID 16385)
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- TOC entry 2931 (class 0 OID 0)
-- Dependencies: 202
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


--
-- TOC entry 2797 (class 2604 OID 16390)
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


--
-- TOC entry 2799 (class 2606 OID 16395)
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


-- Completed on 2023-07-01 17:40:14

--
-- PostgreSQL database dump complete
--

