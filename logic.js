$(document).ready(function() {
  let check = true;
  $('#switch').click(function() {
    if (check) {
      $('#fortune').css('display', 'inline');
      $('#normal').css('display', 'none');
      check = false;
    } else {
      $('#fortune').css('display', 'none');
      $('#normal').css('display', 'inline');
      check = true;
    }
  });

  let classroom;
  let current;
  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }

  if (localStorage.getItem('classroom') != null) {
    classroom = JSON.parse(localStorage.getItem('classroom'));
    current = parseInt(localStorage.getItem('current'));
    $('#random').hide();
    $('#student').text(classroom[current] + ': ' + (current + 1));
  } else {
    classroom = [
      'Abdul Barre',
      'Alex Griep',
      'Ashley Wegwerth',
      'Aubrey Koski',
      'Balaji Manoharan',
      'Baraka Ibrahim',
      'Bashir Raghe',
      'Ben Honken',
      'Blake Pierce',
      '💯🅱️🅾️👌💯',
      'Brooke Kumar',
      'Bryan Iund',
      "Elizabeth O'Leary",
      'Hamza Abdikarim',
      'Henry Johnson',
      'Issa Issa',
      'Jacob Rosenbaum',
      'Jonathan Carrasco',
      'Elia Facundo Orta Carrasco',
      'James Botham',
      'James Caples',
      'Johnny Yang',
      'Ka Vang',
      'Kayla Kuhlman',
      'Keith Kleinschmidt',
      'Kyle Betlach',
      'Mai Xiong',
      'Mauricio Gomez',
      'Mohamed Abdi',
      'Haylee Thomas-Kuhlmann',
      'Mohamed Ahmed',
      'Ranji Ramroop',
      'Tasha Tran',
      'Tim Scheve',
      'Richard Tshabalala',
      'Yogeeta Gajway',
      'Zhen yong Chen',
      'Abdullahi Hassans',
      'Abdul Barre',
      'Alex Griep',
      'Ashley Wegwerth',
      'Aubrey Koski',
      'Balaji Manoharan',
      'Baraka Ibrahim',
      'Bashir Raghe',
      'Ben Honken',
      'Blake Pierce',
      '💯🅱️🅾️👌💯',
      'Brooke Kumar',
      'Bryan Iund',
      "Elizabeth O'Leary",
      'Hamza Abdikarim',
      'Henry Johnson',
      'Issa Issa',
      'Jacob Rosenbaum',
      'Jonathan Carrasco',
      'Elia Facundo Orta Carrasco',
      'James Botham',
      'James Caples',
      'Johnny Yang',
      'Ka Vang',
      'Kayla Kuhlman',
      'Keith Kleinschmidt',
      'Kyle Betlach',
      'Mai Xiong',
      'Mauricio Gomez',
      'Mohamed Abdi',
      'Haylee Thomas-Kuhlmann',
      'Mohamed Ahmed',
      'Ranji Ramroop',
      'Tasha Tran',
      'Tim Scheve',
      'Richard Tshabalala',
      'Yogeeta Gajway',
      'Zhen yong Chen',
      'Abdullahi Hassans',
      'Abdul Barre',
      'Alex Griep',
      'Ashley Wegwerth',
      'Aubrey Koski',
      'Balaji Manoharan',
      'Baraka Ibrahim',
      'Bashir Raghe',
      'Ben Honken',
      'Blake Pierce',
      '💯🅱️🅾️👌💯',
      'Brooke Kumar',
      'Bryan Iund',
      "Elizabeth O'Leary",
      'Hamza Abdikarim',
      'Henry Johnson',
      'Issa Issa',
      'Jacob Rosenbaum',
      'Jonathan Carrasco',
      'Elia Facundo Orta Carrasco',
      'James Botham',
      'James Caples',
      'Johnny Yang',
      'Ka Vang',
      'Kayla Kuhlman',
      'Keith Kleinschmidt',
      'Kyle Betlach',
      'Mai Xiong',
      'Mauricio Gomez',
      'Mohamed Abdi',
      'Haylee Thomas-Kuhlmann',
      'Mohamed Ahmed',
      'Ranji Ramroop',
      'Tasha Tran',
      'Tim Scheve',
      'Richard Tshabalala',
      'Yogeeta Gajway',
      'Zhen yong Chen',
      'Abdullahi Hassans',
      'Chris Woolcott'
    ];
    current = 0;
    console.log(classroom);
    $('#student').hide();
  }
  $('#random').click(function() {
    current = 0;
    shuffle(classroom);
    console.log(classroom);
    $('#student').show();
    $('#student').text(classroom[current] + ': ' + current + 1);
    $('#random').addClass('animated bounceOutUp');
    setTimeout(function() {
      $('#random').hide();
    }, 1000);
  });

  $('#student').click(function() {
    if (current === classroom.length - 1) {
      $('#student').addClass('animated bounceOutRight');
      current = 0;
      shuffle(classroom);
      console.log(classroom);
      localStorage.setItem('classroom', JSON.stringify(classroom));
      localStorage.setItem('current', JSON.stringify(current));
      setTimeout(function() {
        $('#student').removeClass('animated bounceOutRight');
        $('#student').text(classroom[current] + ': ' + (current + 1));
        $('#student').addClass('animated bounceInLeft');
        setTimeout(function() {
          $('#student').removeClass('animated bounceInLeft');
        }, 2000);
      }, 350);
    } else {
      current++;
      $('#student').text(classroom[current] + ': ' + (current + 1));
      localStorage.setItem('classroom', JSON.stringify(classroom));
      localStorage.setItem('current', JSON.stringify(current));
    }
  });

  var padding = { top: 20, right: 40, bottom: 0, left: 0 },
    w = 500 - padding.left - padding.right,
    h = 500 - padding.top - padding.bottom,
    r = Math.min(w, h) / 2,
    rotation = 0,
    oldrotation = 0,
    picked = 100000,
    oldpick = [],
    color = d3.scale.category20(); //category20c()
  //randomNumbers = getRandomNumbers();

  //http://osric.com/bingo-card-generator/?title=HTML+and+CSS+BINGO!&words=padding%2Cfont-family%2Ccolor%2Cfont-weight%2Cfont-size%2Cbackground-color%2Cnesting%2Cbottom%2Csans-serif%2Cperiod%2Cpound+sign%2C%EF%B9%A4body%EF%B9%A5%2C%EF%B9%A4ul%EF%B9%A5%2C%EF%B9%A4h1%EF%B9%A5%2Cmargin%2C%3C++%3E%2C{+}%2C%EF%B9%A4p%EF%B9%A5%2C%EF%B9%A4!DOCTYPE+html%EF%B9%A5%2C%EF%B9%A4head%EF%B9%A5%2Ccolon%2C%EF%B9%A4style%EF%B9%A5%2C.html%2CHTML%2CCSS%2CJavaScript%2Cborder&freespace=true&freespaceValue=Web+Design+Master&freespaceRandom=false&width=5&height=5&number=35#results

  var data = [
    {
      label: 'Abdul Barre',
      value: '',
      question: 'Abdul Barre'
    }, // padding
    { label: 'Alex Griep', value: '', question: 'Alex Griep' }, //font-family
    {
      label: 'Ashley Wegwerth',
      value: '',
      question: 'Ashley Wegwerth'
    }, //color
    {
      label: 'Aubrey Koski',
      value: '',
      question: 'Aubrey Koski'
    }, //font-weight
    {
      label: 'Balaji Manoharan',
      value: '',
      question: 'Balaji Manoharan'
    }, //font-size
    {
      label: 'Baraka Ibrahim',
      value: '',
      question: 'Baraka Ibrahim'
    }, //background-color
    {
      label: 'Bashir Raghe',
      value: '',
      question: 'Bashir Raghe'
    }, //nesting
    {
      label: 'Ben Honken',
      value: '',
      question: 'Ben Honken'
    }, //bottom
    {
      label: 'Blake Pierce',
      value: '',
      question: 'Blake Pierce'
    }, //sans-serif
    {
      label: 'Brennan Spicer',
      value: '',
      question: '💯🅱️🅾️👌💯'
    }, //period
    {
      label: 'Brooke Kumar',
      value: '',
      question: 'Brooke Kumar'
    }, //pound sign
    {
      label: 'Bryan Iund',
      value: '',
      question: 'Bryan Iund'
    }, //<body>
    {
      label: "Elizabeth O'Leary",
      value: '',
      question: "Elizabeth O'Leary"
    }, //<ul>
    {
      label: 'Hamza Abdikarim',
      value: '',
      question: 'Hamza Abdikarim'
    }, //<h1>
    {
      label: 'Henry Johnson',
      value: '',
      question: 'Henry Johnson'
    }, //margin
    { label: 'Issa Issa', value: '', question: 'Issa Issa' }, //< >
    { label: 'Jacob Rosenbaum', value: '', question: 'Jacob Rosenbaum' }, // { }
    {
      label: 'Jonathan Carrasco',
      value: '',
      question: 'Jonathan Carrasco'
    }, //<p>
    {
      label: 'Elia Facundo Orta Carrasco',
      value: '',
      question: 'Elia Facundo Orta Carrasco'
    }, //<!DOCTYPE html>
    {
      label: 'James Botham',
      value: '',
      question: 'James Botham'
    }, //<head>
    {
      label: 'James Caples',
      value: '',
      question: 'James Caples'
    }, // colon
    { label: 'Johnny Yang', value: '', question: 'Johnny Yang' }, // <style>
    {
      label: 'Ka Vang',
      value: '',
      question: 'Ka Vang'
    }, // .html
    {
      label: 'Kayla Kuhlman',
      value: '',
      question: 'Kayla Kuhlman'
    }, // HTML
    {
      label: 'Keith Kleinschmidt',
      value: '',
      question: 'Keith Kleinschmidt'
    }, // CSS
    {
      label: 'Kyle Betlach',
      value: '',
      question: 'Which coding language is used for adding functionality to a web page?Kyle Betlach'
    }, // JavaScript
    {
      label: 'Mai Xiong',
      value: '',
      question: 'Mai Xiong'
    }, // border
    {
      label: 'Mauricio Gomez',
      value: '',
      question: 'Mauricio Gomez'
    }, //semi-colon
    { label: 'Mohamed Abdi', value: '', question: 'Mohamed Abdi' }, //100%
    {
      label: 'Haylee Thomas-Kuhlmann',
      value: '',
      question: 'Haylee Thomas-Kuhlmann'
    }, //100%
    {
      label: 'Mohamed Ahmed',
      value: '',
      question: 'Mohamed Ahmed'
    }, //100%
    {
      label: 'Ranji Ramroop',
      value: '',
      question: 'Ranji Ramroop'
    }, //100%
    {
      label: 'Tasha Tran',
      value: '',
      question: 'Tasha Tran'
    }, //100%
    {
      label: 'Tim Scheve',
      value: '',
      question: 'Tim Scheve'
    }, //100%
    {
      label: 'Richard Tshabalala',
      value: '',
      question: 'Richard Tshabalala'
    }, //100%
    {
      label: 'Yogeeta Gajway',
      value: '',
      question: 'Yogeeta Gajway'
    }, //100%
    {
      label: 'Zhen yong Chen',
      value: '',
      question: 'Zhen yong Chen'
    }, //100%
    {
      label: 'Abdullahi Hassans',
      value: '',
      question: 'Abdullahi Hassans'
    }
  ];

  var svg = d3
    .select('#chart')
    .append('svg')
    .data([data])
    .attr('width', w + padding.left + padding.right)
    .attr('height', h + padding.top + padding.bottom);

  var container = svg
    .append('g')
    .attr('class', 'chartholder')
    .attr('transform', 'translate(' + (w / 2 + padding.left) + ',' + (h / 2 + padding.top) + ')');

  var vis = container.append('g');

  var pie = d3.layout
    .pie()
    .sort(null)
    .value(function(d) {
      return 1;
    });

  // declare an arc generator function
  var arc = d3.svg.arc().outerRadius(r);

  // select paths, use arc generator to draw
  var arcs = vis
    .selectAll('g.slice')
    .data(pie)
    .enter()
    .append('g')
    .attr('class', 'slice');

  arcs
    .append('path')
    .attr('fill', function(d, i) {
      return color(i);
    })
    .attr('d', function(d) {
      return arc(d);
    });

  // add the text
  arcs
    .append('text')
    .attr('transform', function(d) {
      d.innerRadius = 0;
      d.outerRadius = r;
      d.angle = (d.startAngle + d.endAngle) / 2;
      return (
        'rotate(' + ((d.angle * 180) / Math.PI - 90) + ')translate(' + (d.outerRadius - 10) + ')'
      );
    })
    .attr('text-anchor', 'end')
    .text(function(d, i) {
      return data[i].label;
    });

  container.on('click', spin);

  function spin(d) {
    container.on('click', null);
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', './GameShow.mp3');
    audioElement.play();

    //all slices have been seen, all done
    console.log('OldPick: ' + oldpick.length, 'Data length: ' + data.length);
    if (oldpick.length == data.length) {
      console.log('done');
      container.on('click', null);
      return;
    }

    var ps = 360 / data.length,
      pieslice = Math.round(1440 / data.length),
      rng = Math.floor(Math.random() * 1440 + 360);

    rotation = Math.round(rng / ps) * ps;

    picked = Math.round(data.length - (rotation % 360) / ps);
    picked = picked >= data.length ? picked % data.length : picked;

    if (oldpick.indexOf(picked) !== -1) {
      d3.select(this).call(spin);
      return;
    } else {
      oldpick.push(picked);
    }

    rotation += 90 - Math.round(ps / 2);

    vis
      .transition()
      .duration(6000)
      .attrTween('transform', rotTween)
      .each('end', function() {
        //mark question as seen
        d3.select('.slice:nth-child(' + (picked + 1) + ') path').attr('fill', '#111');

        //populate question
        d3.select('#question h1').text(data[picked].question);

        oldrotation = rotation;

        container.on('click', spin);
      });
  }

  //make arrow
  svg
    .append('g')
    .attr(
      'transform',
      'translate(' + (w + padding.left + padding.right) + ',' + (h / 2 + padding.top) + ')'
    )
    .append('path')
    .attr('d', 'M-' + r * 0.15 + ',0L0,' + r * 0.05 + 'L0,-' + r * 0.05 + 'Z')
    .style({ fill: 'black' });

  //draw spin circle
  container
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 60)
    .style({ fill: 'white', cursor: 'pointer' });

  //spin text
  container
    .append('text')
    .attr('x', 0)
    .attr('y', 15)
    .attr('text-anchor', 'middle')
    .text('SPIN')
    .style({ 'font-weight': 'bold', 'font-size': '30px' });

  function rotTween(to) {
    var i = d3.interpolate(oldrotation % 360, rotation);
    return function(t) {
      return 'rotate(' + i(t) + ')';
    };
  }

  function getRandomNumbers() {
    var array = new Uint16Array(1000);
    var scale = d3.scale
      .linear()
      .range([360, 1440])
      .domain([0, 100000]);

    if (window.hasOwnProperty('crypto') && typeof window.crypto.getRandomValues === 'function') {
      window.crypto.getRandomValues(array);
      console.log('works');
    } else {
      //no support for crypto, get crappy random numbers
      for (var i = 0; i < 1000; i++) {
        array[i] = Math.floor(Math.random() * 100000) + 1;
      }
    }

    return array;
  }
});
