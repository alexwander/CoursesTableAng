/**
 * Created by alexandr on 05.06.2016.
 */
'use strict';

coursesApp.controller('CoursesController',
    function CoursesController($scope) {
        $scope.event = {

            name: 'Angular f messsage',
            date: '1/1/1990',
            time: '10:30 am',


            imageUrl: 'img/angularjs-logo.png',

            courses: [
                {
                    name: 'Core Computer Science',
                    credits: 'These courses make of the building blocks of the computer science degree.',
                    selection: '',
                    logo: ''

                },

                {
                    name: 'Upper Level Computer Science',
                    credits: 'These computer science degree courses make of the building blocks of the .',
                    selection: '',
                    logo: ''
                },

                {
                    name: 'Math',
                    credits: 'YUour science degree courses make of the building blocks of the computer .',
                    selection: '',
                    logo: ''
                }


            ]

        }


    }
);