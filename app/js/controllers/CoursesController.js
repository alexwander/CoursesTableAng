/**
 * Created by alexandr on 05.06.2016.
 */
'use strict';

coursesApp.controller('CoursesController',
    function CoursesController($scope, courseData) {
        $scope.event = courseData.course;


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