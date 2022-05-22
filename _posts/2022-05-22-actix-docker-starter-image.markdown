---
layout: post
title:  "Actix Docker Starter Image"
date:   2022-05-22 08:30:45 +0100
categories: notes
tags:
- rust
show_excerpts: true
published: true
---


cargo.toml
```rust
[package]
name = "hello-world"
version = "0.1.0"
edition = "2021"

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
actix-web = "4"
```

main.rs
```rust
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("0.0.0.0", 8080))?
    .run()
    .await
}
```

Dockerfile
```
# 1. This tells docker to use the Rust official image
FROM rust:1.59.0

# 2. Copy the files in your machine to the Docker image
COPY ./ ./

# Build your program for release
RUN cargo build --release

# Run the binary
CMD ["./target/release/hello-world"]
```

```
$ docker build -t hello-world .
$ docker run -p 8080:8080 --rm --name hello-world1 hello-world  
```

