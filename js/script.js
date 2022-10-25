// Copyright (c) 202X Claire Bedrossian All rights reserved
//
// Created by: Claire Bedrossian
// Created on: XXX 202X
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit2-04-PWA/sw.js", {
    scope: "/ICS20-Unit2-04-PWA/",
  })
}

/**
 * This function calculates the area and perimeter of a triangle with user input
 */
function myButtonClicked() {
  // input
  const base = parseInt(document.getElementById("base-number").value)
  const height = parseInt(document.getElementById("height-number").value)
  const sideA = parseInt(document.getElementById("side-a-number").value)
  const sideC = parseInt(document.getElementById("side-c-number").value)

  //process

  const area = base * height
  const perimeter = sideA + sideC + base

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
  document.getElementById("perimeter").innerHTML =
    "Perimeter is: " + perimeter + " cm"
}
