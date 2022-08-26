---
layout: post
title:  "Rust webscraper in 5 minutes"
date:   2022-08-10 12:35:00 +0100
categories: notes
tags:
- rust
show_excerpts: true
published: true
---

Simple boilerplate code to set up a web scraper in Rust. Html content is parsed and relevant parts are extracted using CSS selectors.

```rust
[package]
name = "web_scraper"
version = "0.1.0"
edition = "2021"

[dependencies]
reqwest = {version = "0.11", features = ["blocking"]}
scraper = "0.12.0"
```

```rust
fn main() {

    // We don't need to make an async request in this  example.
    // A blocking client waits for the request to complete rather than returning futures 
    
    let response = reqwest::blocking::get(
        "https://www.goodreads.com/list/show/2681.Time_Magazine_s_All_Time_100_Novels",
    )
    
    // The get method returns a Result type. It is an enum that can represent
    // either success or failure. unwrap() allows us to handle errors:
    // "While this may or may not have a value, I'm saying it does. If it doesn't,
    // just crash, I don't want to handle the error
    
    .unwrap()
    .text()
    .unwrap();

    // parses a reference of the document as html
    let document = scraper::Html::parse_document(&response);

    // we use a CSS selector to extract book titles
    let title_selector = scraper::Selector::parse("a.bookTitle>span").unwrap();

    let titles = document.select(&title_selector).map(|x| x.inner_html());

    // We zip the list of titles together with numbers ranging from 1 to 100.
    // Finally, we iterate through the titles and print the number and book title.
    titles
        .zip(1..100)
        .for_each(|(item, number)| println!("{}. {}", number, item));}`
}
```
