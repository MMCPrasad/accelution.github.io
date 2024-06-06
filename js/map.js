var chartdiv = AmCharts.makeChart("chartdiv", {
    "type": "map",
    "theme": "none",
    "pathToImages": "https://www.amcharts.com/lib/3/images/",
    "balloon": {
      "adjustBorderColor": true,
      "color": "#FFFFFF",
      "fillColor": "#444444",
      "fontSize": 14,
      "borderThickness": 0,
      "horizontalPadding": 20,
      "verticalPadding": 10,
      "textAlign": "left"
    },
  
    "dataProvider": {
        "zoomLevel":1,
        "zoomLongitude": -92,
        "zoomLatitude": 58,
        "mapURL": "http://blendermedia.com/map/canadaHigh-3.svg",
          "images":
           [
            {
              latitude: 58.4983693,
              longitude: -115.0001885,
              imageURL: "http://blendermedia.com/map/Enbridge.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              height: 20,
              width: 64,
              zoomLevel:2
            },
            {
              latitude: 60.5371,
              longitude: -125.51885,
              imageURL: "http://blendermedia.com/map/Telus.svg",
              color:"#CC0000",
              fixedSize: false,
              scale:1,
              height: 12,
              width: 52,
              zoomLevel:2
            },
            {
              latitude: 59.4997618,
              longitude: -96.4926153,
              imageURL: "http://blendermedia.com/map/Greatwest-2.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              height: 14,
              width: 48,
              zoomLevel:2
            },
            {
              latitude: 54.2868028,
              longitude: -105.6819901,
              imageURL: "http://blendermedia.com/map/Potash.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              height: 20,
              width: 40,
              zoomLevel:2
            },
            {
              latitude: 54.291613,
              longitude: -87.1493416,
              imageURL: "http://blendermedia.com/map/RBC.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              height: 44,
              width: 32,
              zoomLevel:2
            },
            {
              latitude: 59.2611,
              longitude: -70.339115,
              imageURL: "http://blendermedia.com/map/Valeant.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              height: 9,
              width: 52,
              zoomLevel:2
            },
            {
              latitude: 36.5,
              longitude: -77.5,
              imageURL: "http://blendermedia.com/map/Scotiabank.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              centered: false,
              height: 20,
              width: 64,
              zoomLevel:2
            },
            {
              latitude: 40.0,
              longitude: -61.2,
              imageURL: "http://blendermedia.com/map/Solarvest-4.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              centered: false,
              height: 18,
              width: 48,
              zoomLevel:2
            },
            {
              latitude: 36.7,
              longitude: -61.2,
              imageURL: "http://blendermedia.com/map/Fortis.svg",
              color:"#CC0000",
              scale:1,
              fixedSize: false,
              centered: false,
              height: 9,
              width: 50,
              zoomLevel:2
            },
            {
              latitude: 40.0,
              longitude: -77.5,
              imageURL: "http://blendermedia.com/map/Major.svg",
              color:"#CC0000",
              scale:1,
              centered: false,
              fixedSize: false,
              height: 10,
              width: 40,
              zoomLevel:2
            },
            {
              latitude: 39.21843,
              longitude: -80.5,
              imageURL: "http://blendermedia.com/map/1.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 39.21843,
              longitude: -64.5,
              imageURL: "http://blendermedia.com/map/2.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 36.0,
              longitude: -80.5,
              imageURL: "http://blendermedia.com/map/3.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 36.0,
              longitude: -64.5,
              imageURL: "http://blendermedia.com/map/4.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 46.5,
              longitude: -67.5,
              imageURL: "http://blendermedia.com/map/1.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 48.5,
              longitude: -62.5,
              imageURL: "http://blendermedia.com/map/2.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 46.0,
              longitude: -60.5,
              imageURL: "http://blendermedia.com/map/3.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            },
            {
              latitude: 51.0,
              longitude: -53.5,
              imageURL: "http://blendermedia.com/map/4.svg",
              scale:1,
              fixedSize: false,
              height: 12,
              width: 12,
              zoomLevel:2,
              mouseEnabled: false
            }
          ],
          "areas": [
            {
              id:"CA-AB",
              balloonText: "<div class='popup-header'>Company: Enbridge Inc. </div> <p>Fun Fact: Enbridge Inc. was originally named the ‘Interprovincial Pipe Line Company’ until it was changed in 1998 to ‘Enbridge’ a name combining “energy” with “bridge”. </p>",
              color: "#67CE99",
              rollOverColor: "#AEE3C9",
              selectedColor: "#AEE3C9"
            },
            {
              id:"CA-BC",
              balloonText: "<div class='popup-header'>Company: Telus Inc.</div> <p>Fun Fact: Telus is very active on social media and YouTube, and put out a video series last year of employees reading out their customers’ angry tweets to them.</p> ",
              color: "#6d81be",
              rollOverColor: "#B1BCDA",
              selectedColor: "#B1BCDA"
            },
            {id:"CA-MB",
              balloonText: "<div class='popup-header'>Company: Great-West Lifeco Inc.</div> <p>Fun Fact: Great-West Lifeco has operations in Canada, the U.S., Europe and Asia through London Life, Canada Life, Irish Life, Great-West Life, and Putnam Investments. </p>",
              color: "#679ACF",
              rollOverColor: "#AEC9E4",
              selectedColor: "#AEC9E4"},
            {id:"CA-NB",
              balloonText: "<div class='popup-header'>Company: Major Drilling Group International Inc.</div><p>Fun Fact: Major Drilling Group’s fleet includes over 700 different drills, and they’re registered in 20 different countries. </p>",
              color: "#c6dc78",
              rollOverColor: "#DDE9B9"},
            {id:"CA-NL",
              balloonText: "<div class='popup-header'>Company: Fortis Inc.</div><p>Fun Fact: Fortis Inc.’s CEO’s name is Barry V. Perry. Now that’s pretty fun to say. </p>",
              color: "#6fc8c6",
              rollOverColor: "#B2DEDD"},
            {id:"CA-NS",
              balloonText: "<div class='popup-header'>Company: Bank of Nova Scotia (Scotiabank) </div><p>Fun Fact: The bank of Nova Scotia is the second oldest bank in Canada. The idea began in 1831 when a group of Halifax businessmen met in a coffee house to discuss the need for a public bank. </p>",
              color: "#48607a",
              rollOverColor: "#9FABB9"},
            {id:"CA-NT",
              color: "#D9D9D9",
              rollOverColor: "#D9D9D9"},
            {id:"CA-NU",
              color: "#C8C8C8",
              rollOverColor: "#C8C8C8"},
            {id:"CA-ON",
              balloonText: "<div class='popup-header'>Company: Royal Bank of Canada</div><p>Fun Fact: RBC was the first Canadian bank to offer information through the World Wide Web at www.royalbank.com. The year was 1995, and in 1996 the website was receiving upwards of 10,000 views a week.</p>",
              color: "#87d3f5",
              rollOverColor: "#c0e5f7"},
            {id:"CA-PE",
              balloonText: "<div class='popup-header'>Company: Solarvest BioEnergy Inc.*<br><small>*Location based on Operations & R&D</small></div><p>Fun Fact: Solarvest works mainly with algae, and has created technology that enables algae to produce hydrogen in a continuous cycle in a single vessel. Cool!</p>",
              color: "#6d81be",
              rollOverColor: "#B8DCB2"},
            {id:"CA-QC",
              balloonText: "<div class='popup-header'>Company: Valeant Pharmaceuticals International, Inc.</div><p>Fun Fact: In addition to their International headquarters in Laval, Quebec, Valeant has a U.S. headquarters in Bridgewater New Jersey.</p>",
              color: "#ab6fad",
              rollOverColor: "#D0B3D2"},
            {id:"CA-SK",
              balloonText: "<div class='popup-header'>Company: Potash Corp of Saskatchewan Inc. </div><p>Fun Fact: Potash Corp. has created a virtual mine and mill tour on their website where you can learn about potash, meet the people, and see the inside of a mine. </p>",
              color: "#16B8AB",
              rollOverColor: "#86D7D1"},
            {id:"CA-YT",
              color: "#C8C8C8",
              rollOverColor: "#C8C8C8"}],
      "getAreasFromMap": true
    },
    "areasSettings": {
      "autoZoom": false,
      "selectedColor": "#d9d9d9",
          "rollOverOutlineAlpha": 0,
          "unlistedAreasColor":"#c8c8c8"
    },
    "dragMap": !('ontouchstart' in window),
    "panEventsEnabled": false,
    "responsive": {
    "enabled": true,
      "rules": [
      // at 400px wide, we hide legend
        {
          "maxWidth": 400,
          "overrides": {
            "dataProvider": {
                "zoomLevel":1
            }
          }
        }
       ]
    }
  });