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


        $scope.checkAll = function () {
            if ($scope.selectedAll) {
                $scope.selectedAll = true;
            } else {
                $scope.selectedAll = false;
            }

            angular.forEach($scope.courses, function (course) {
                course.Selected = $scope.selectedAll;
            });
        }


    }
);