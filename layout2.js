$(document).ready(function() {



    function getRandomInt(min, max) { //random number generator
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }



    photos = [{
            'country': 'Albania',
            'name': 'Giada Kuka',
            'age': ' 10'
        },
        {
            'country': 'Algeria',
            'name': 'Ibtissem Lebsir',
            'age': '9'
        },
        {
            'country': 'Andorra',
            'name': 'Claudia Uno',
            'age': '8'
        },
        {
            'country': 'Argentina',
            'name': 'Alejandro Goldzycher',
            'age': '9'
        },
        {
            'country': 'Azerbaijan',
            'name': 'Tamara Mamedova',
            'age': ' 11'
        },
        {
            'country': 'Barbados',
            'name': 'Tobias Cummins',
            'age': '9'
        },
        {
            'country': 'Belarus',
            'name': 'Lizaveta Lenkevich',
            'age': '9'
        },
        {
            'country': 'Benin',
            'name': 'Emile Mavel',
            'age': '9'
        },
        {
            'country': 'Bosnia',
            'name': 'Nelma  Sahinovic',
            'age': '12'
        },
        {
            'country': 'Botswana',
            'name': 'Omphemetse Meshack',
            'age': '12'
        },
        {
            'country': 'Brazil',
            'name': 'Anna Carolina Dos Santos Israel',
            'age': ' 12'
        },
        {
            'country': 'Bulgaria',
            'name': 'Desislava Kostova',
            'age': '10'
        },
        {
            'country': 'Chile',
            'name': 'Vlviana Norambuena Torres',
            'age': '11'
        },
        {
            'country': 'China',
            'name': 'Yu Keren',
            'age': '8'
        },
        {
            'country': 'Croatia',
            'name': 'Masa Budimir',
            'age': '12'
        },
        {
            'country': 'Cuba',
            'name': 'Yasmany Perez Suarez',
            'age': '10'
        },
        {
            'country': 'Denmark',
            'name': 'Louise Wichman Madsen',
            'age': '10'
        },
        {
            'country': 'Ecuador',
            'name': 'Maria Alejandra Garcia Buitrago',
            'age': '10'
        },
        {
            'country': 'Egypt',
            'name': 'Sherry Atef Georgy',
            'age': '12'
        },
        {
            'country': 'Gambia',
            'name': 'Fatma Semega Janneh',
            'age': '11'
        },
        {
            'country': 'Georgia',
            'name': 'Nino Bughadze',
            'age': '10'
        },
        {
            'country': 'Germany',
            'name': 'Anne Langer',
            'age': '12'
        },
        {
            'country': 'Guyana',
            'name': 'Alex Joseph',
            'age': '12'
        },
        {
            'country': 'Honduras',
            'name': 'Bayron Alexander Del Cid',
            'age': '12'
        },
        {
            'country': 'Hungary',
            'name': 'Ilona Halasi',
            'age': '11'
        },
        {
            'country': 'Indonesia',
            'name': 'Francisca Candra',
            'age': '10'
        },
        {
            'country': 'Iran',
            'name': 'Azadeh Samiei',
            'age': '10'
        },
        /*{
            'country': 'Jason Birmingham',
            'name': 'age 11',
            'age': 'Oregon'
        },*/
        {
            'country': 'Kazakhstan',
            'name': 'Akhtoty Nurtanova',
            'age': '8'
        },
        {
            'country': 'Kyrgyz Republic',
            'name': 'Gaper Diusheev',
            'age': '12'
        },
        {
            'country': 'Latvia',
            'name': 'Martins Muzikants',
            'age': '11'
        },
        {
            'country': 'Lebanon',
            'name': 'Lotfeh Mohamed El Masri',
            'age': '11'
        },
        {
            'country': 'Lesotho',
            'name': 'Rethabile Makhakhe',
            'age': '11'
        },
        {
            'country': 'Liberia',
            'name': 'Permanent Wilmont',
            'age': ' age 11'
        },
        {
            'country': 'Lithuania',
            'name': 'Mykolas Vasiliunas',
            'age': '9'
        },
        {
            'country': 'Macedonia',
            'name': 'Emilija Stefanovska',
            'age': '10'
        },
        {
            'country': 'Maldives',
            'name': 'Fathmath Ifthaan Maumoon',
            'age': '11'
        },
        {
            'country': 'Myanmar',
            'name': 'Kaung Myat Zaw',
            'age': '12'
        },
        {
            'country': 'Nepal',
            'name': 'Sagar Manadhar',
            'age': '12'
        },
        {
            'country': 'NewZealand',
            'name': 'Amanda Montgomerie',
            'age': '11'
        },
        {
            'country': 'Palestine',
            'name': 'Miryam Baadasa',
            'age': '11 '
        },
        {
            'country': 'Serbia',
            'name': 'Ivan Veljkovic',
            'age': ' 11'
        },
        {
            'country': 'Sierra Leone',
            'name': 'Sarran Kabba',
            'age': '11'
        },
        {
            'country': 'Turkey',
            'name': 'Oguzcan Kaganoguzbeyoglu',
            'age': '12'
        },
        {
            'country': 'Turkmenistan',
            'name': 'Tanya Mendikovskaya',
            'age': '12'
        },
        {
            'country': 'United Arab Emirates',
            'name': 'Imar Mohhamed Hamer Saif',
            'age': '8'
        },
        /*{
            'country': 'UnitedStates',
            'name': 'Wisconsin',
            'age': 'Shellie Lee Korth'
        },
        {
            'country': 'USA',
            'name': 'California',
            'age': 'Jonathan Stearns'
        },
        {
            'country': 'USA',
            'name': 'California',
            'age': 'Jonathan Stearns'
        },
        {
            'country': 'USA',
            'name': 'Florida',
            'age': 'Camilla Cohen'
        },
        {
            'country': 'USA',
            'name': 'Indiana',
            'age': 'Paige Marie Rothrock'
        },
        {
            'country': 'USA',
            'name': 'Indiana',
            'age': 'Paige Marie Rothrock'
        },
        {
            'country': 'USA',
            'name': 'Iowa',
            'age': 'Derick Smith'
        },
        {
            'country': 'USA',
            'name': 'New Jersey',
            'age': 'William Chen'
        },
        {
            'country': 'USA',
            'name': 'Pennsylvania',
            'age': 'Carson Beyl'
        },
        {
            'country': 'USA',
            'name': 'Texas',
            'age': 'Brenda Rodriguez'
        },
        {
            'country': 'Vietnam',
            'name': 'Thao Phuong Vu',
            'age': ' 10'
        },*/
        {
            'country': 'Zambia',
            'name': 'Evan Dice',
            'age': '9'
        }
    ]

    for (var i = 0; i < photos.length; i++) {

        photos[i].image = `Children depict the Future/${photos[i].country} (${photos[i].name},${photos[i].age}).jpg`





    }
    var searchTerm = $('#keywords').val();
    $('#search').on('click', function() {
        searchTerm = $('#keywords').val();
				debugger
        loadImages();
    });


    $('.row').css("opacity", "0"); //set images to invisible
    function setImageGrid() {

        //Set grid images randomly
        $('.grid-item').each(function() { //select image container, iterate over each
            if (searchTerm == "") {
                randNum = getRandomInt(0, photos.length - 1); //get random number range(0, length of photos array)
                file = photos[randNum].image; //set image file to location
                //console.log("search :" + $('#keywords').val())
                $(this).children().each(function() { //select image, iterate over each

                    //console.log($(this).attr('src', file));
                    $(this).attr('src', file); //set image source to file location
                    //  console.log(file)
                });
            } else {
                tempArray = [];
                for (var i = 0; i < photos.length; i++) {
                    if (photos[i].age == searchTerm) {
                        tempArray.push(photos[i])
                    }
                }
                randNum = getRandomInt(0, tempArray.length - 1); //get random number range(0, length of photos array)
                file = tempArray[randNum].image;

                $(this).children().each(function() { //select image, iterate over each

                    //console.log($(this).attr('src', file));
                    $(this).attr('src', file); //set image source to file location

                });


            }
        });
    }

    function displayImageGrid() { //display the images after 1 sec. It takes time for the images to be
        //set and then placed properly. Sometimes this lags if images need to
        //be rearraged based on the layout and I don't want the user to see that.
        //I am hiding that via a setTimeout. All should be done by 1000 miliseconds.

        setTimeout(function() {

            $('.row').fadeTo('slow', 1);
        }, 1000);

    }

    function loadImages() {
        setImageGrid();
        displayImageGrid();
    }
    loadImages();

/*********************************************/
  /****Hover Effects****/
});
/*THE RUBY CODE TO MAKE THESE File name strings
File.open('futureString.txt').each do |line|
   country, name, age = line.split(",")
File.open('output.txt','a') do |line|
   line.puts "{ country: #{country.strip}, name : #{name.strip}, age: #{age.strip}}"
end
end



*/
