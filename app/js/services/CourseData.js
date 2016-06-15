/**
 * Created by alexandr on 15.06.2016.
 */

coursesApp.factory('courseData', function () {
    return {
        course: {
            name: 'Angular f messsage',
            date: '1/1/1990',
            time: '10:30 am',
            imageUrl: 'img/angularjs-logo.png',
            courses: [
                {
                    name: 'Core Computer Science',
                    credits: 'These courses make of the building blocks of the computer science degree.',
                    selection: 'null',
                    logo: 'img/logo.png'

                },

                {
                    name: 'Upper Level Computer Science',
                    credits: 'These computer science degree courses make of the building blocks of the .',
                    selection: 'null',
                    logo: 'img/logo.png'
                },

                {
                    name: 'Math',
                    credits: 'YUour science degree courses make of the building blocks of the computer .',
                    selection: 'null',
                    logo: 'img/logo.png'
                }],

        }


    };

});