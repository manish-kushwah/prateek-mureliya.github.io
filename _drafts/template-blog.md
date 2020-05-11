---
categories: [java]
tags: ['Java Programs']
title: Collecting logs from whole infrastructure using ELK Stack
---

# Why?
As everyone knows, logs are one of the most `critical` parts of every infrastructure — from system logs and service logs, all the way to application logs. <mark>At Socialbakers we gather different types and structures of logs, and in different formats.</mark>

<!--more-->

It’s quite simple to check logs directly as files **“true agile” development practice works only partially in a B2B software product company.** in the filesystem when dealing with a few servers but with hundreds of servers, thousands of applications and various custom logs, *it’s just not possible to do it manually. That’s why the ELK Stack, AKA Elastic Stack, exists.*

------------------------------------------------------------------------------------------------------------------

# What?
Look at these key statistics from our production infrastructure:
- ELK Stack contains 21 AWS EC2 instances, with different specifications based on usage
- It collects more than 2000 log messages every second
- Stores more than 3.5 billion log messages
- Logs occupy 4.5TB, 810 Elasticsearch indices and 1,620 Lucene shards

<figure>
    <img alt="image" src="https://miro.medium.com/max/1919/1*E3g0zQiVrUcPgHMXju8WLg.png" class="responsive-img">
    <figcaption>Cerebro dashboard of production ELK Elasticsearch cluster</figcaption>
</figure>

# ELK
> **Definition from official elastic.co:** “So, what is the ELK Stack? ELK is the acronym for three open source projects: Elasticsearch, Logstash, and Kibana. Elasticsearch is a search and analytics engine. Logstash is a server‑side data processing pipeline that ingests data from multiple sources simultaneously, transforms it, and then sends it to a “stash” like Elasticsearch. Kibana lets users visualize data with charts and graphs in Elasticsearch.”

<span class="fl">E</span>lasticsearch is used as a storage for all of our logs. It’s composed of three master nodes, four bumper data nodes (bumpers are boosted instances for processing recent logs), six archive data nodes and one client search node. Master nodes are responsible for cluster-wide actions such as creating or deleting indices, tracking nodes in a cluster and deciding which shards to allocate to which nodes.

Sounds interesting? Check out more of our [stories](https://medium.com/socialbakers-engineering) & don’t forget [we’re hiring](https://www.socialbakers.com/careers/)!