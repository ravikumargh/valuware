$(function () {
    $("#catalog").accordion();
});
var App = angular.module('drag-and-drop', ['ngDragDrop', 'ngStorage']);

App.directive('draggable', function ($document) {
    return function (scope, element, attr) {
        var startX = 0,
            startY = 0,
            x = 0,
            y = 0;
        //element.css({
        //    position: 'absolute'
        //});
        element.on('mousedown', function (event) {
            // Prevent default dragging of selected content
            event.preventDefault();
            startX = event.screenX - x;
            startY = event.screenY - y;
            $document.on('mousemove', mousemove);
            $document.on('mouseup', mouseup);
        });

        function mousemove(event) {
            y = event.screenY - startY;
            x = event.screenX - startX;
            element.css({
                top: y + 'px',
                left: x + 'px'
            });
        }

        function mouseup() {
            $document.off('mousemove', mousemove);
            $document.off('mouseup', mouseup);
        }
    };
});

App.directive('onDelKeyUp', function () {
    return function (scope, element, attrs) {
        element.bind("keydown keypress", function (event) {
            if (event.which === 46) {
                scope.$apply(function () {
                    scope.$eval(attrs.onDelKeyUp);
                });

                event.preventDefault();
            }
        });
    };
});

App.controller('oneCtrl', function ($scope, $window, $localStorage, $http) {

    $scope.list1 = [

        {
            'FieldID': '-1',
            'DesignID': '-1',
            'Name': 'Label',
            'Type': 'LABEL',
            'Width': '40',
            'Height': '15',
            'Top': '0',
            'Left': '0',
            'Outline': {
                'Value': '',
                'Display': 'none'
            },
            'DataFieldName': {
                'Value': 'Label',
                'Display': 'none'
            },
            'DataFieldType': {
                'Value': 'varchar(100)',
                'Display': 'none'
            },
            'Content': {
                'Value': 'Label',
                'Display': 'grid'
            },
            'Font': {
                'Value': 'Verdana',
                'Display': 'grid'
            },
            'FontColor': {
                'Value': '#2FF10E',
                'Display': 'grid'
            },
            'FontBold': {
                'Value': '0',
                'Display': 'grid'
            },
            'BackColor': {
                'Value': '#ADA07E',
                'Display': 'grid'
            },
            'ImagePath': {
                'Value': 'NA',
                'Display': 'grid'
            },
            'DefaultSelectText': {
                'Value': '-- Select --',
                'Display': 'grid'
            },
            'Enumerations': {
                'Value': 'item1,item2,item3,item4',
                'Display': 'grid'
            },
            'SelectEnumerations': {
                'Value': ['item2', 'item4'],
                'Display': 'grid'
            }
        },

        {
            'FieldID': '-1',
            'DesignID': '-1',
            'Name': 'Textbox',
            'Type': 'TEXTBOX',
            'Width': '150',
            'Height': '15',
            'Top': '0',
            'Left': '0',
            'Outline': {
                'Value': '',
                'Display': 'none'
            },
            'DataFieldName': {
                'Value': 'Textbox',
                'Display': 'grid'
            },
            'DataFieldType': {
                'Value': 'varchar(100)',
                'Display': 'grid'
            },
            'Content': {
                'Value': 'Textbox',
                'Display': 'grid'
            },
            'Font': {
                'Value': 'Verdana',
                'Display': 'grid'
            },
            'FontColor': {
                'Value': '#2FF10E',
                'Display': 'grid'
            },
            'FontBold': {
                'Value': '0',
                'Display': 'grid'
            },
            'BackColor': {
                'Value': '#ADA07E',
                'Display': 'grid'
            },
            'ImagePath': {
                'Value': 'NA',
                'Display': 'grid'
            },
            'DefaultSelectText': {
                'Value': '-- Select --',
                'Display': 'grid'
            },
            'Enumerations': {
                'Value': 'item1,item2,item3,item4',
                'Display': 'grid'
            },
            'SelectEnumerations': {
                'Value': ['item2', 'item4'],
                'Display': 'grid'
            }
        },

        {
            'FieldID': '-1',
            'DesignID': '-1',
            'Name': 'Textarea',
            'Type': 'TEXTAREA',
            'Width': '125',
            'Height': '100',
            'Top': '0',
            'Left': '0',
            'Outline': {
                'Value': '',
                'Display': 'none'
            },
            'DataFieldName': {
                'Value': 'Textarea',
                'Display': 'grid'
            },
            'DataFieldType': {
                'Value': 'varchar(100)',
                'Display': 'grid'
            },
            'Content': {
                'Value': 'Textarea',
                'Display': 'grid'
            },
            'Font': {
                'Value': 'Verdana',
                'Display': 'grid'
            },
            'FontColor': {
                'Value': '#2FF10E',
                'Display': 'grid'
            },
            'FontBold': {
                'Value': '0',
                'Display': 'grid'
            },
            'BackColor': {
                'Value': '#ADA07E',
                'Display': 'grid'
            },
            'ImagePath': {
                'Value': 'NA',
                'Display': 'grid'
            },
            'DefaultSelectText': {
                'Value': '-- Select --',
                'Display': 'grid'
            },
            'Enumerations': {
                'Value': 'item1,item2,item3,item4',
                'Display': 'grid'
            },
            'SelectEnumerations': {
                'Value': ['item2', 'item4'],
                'Display': 'grid'
            }
        },

        {
            'FieldID': '-1',
            'DesignID': '-1',
            'Name': 'Checkbox1',
            'Type': 'CHECKBOX',
            'Width': '15',
            'Height': '15',
            'Top': '0',
            'Left': '0',
            'Outline': {
                'Value': '',
                'Display': 'none'
            },
            'DataFieldName': {
                'Value': 'Checkbox',
                'Display': 'grid'
            },
            'DataFieldType': {
                'Value': 'bit',
                'Display': 'grid'
            },
            'Content': {
                'Value': 'Checkbox',
                'Display': 'grid'
            },
            'Font': {
                'Value': 'Verdana',
                'Display': 'grid'
            },
            'FontColor': {
                'Value': '#2FF10E',
                'Display': 'grid'
            },
            'FontBold': {
                'Value': '0',
                'Display': 'grid'
            },
            'BackColor': {
                'Value': '#ADA07E',
                'Display': 'grid'
            },
            'ImagePath': {
                'Value': 'NA',
                'Display': 'grid'
            },
            'DefaultSelectText': {
                'Value': '-- Select --',
                'Display': 'grid'
            },
            'Enumerations': {
                'Value': 'item1,item2,item3,item4',
                'Display': 'grid'
            },
            'SelectEnumerations': {
                'Value': ['item2', 'item4'],
                'Display': 'grid'
            }
        },


        {
            'FieldID': '-1',
            'DesignID': '-1',
            'Name': 'Dropdown',
            'Type': 'DROPDOWN',
            'Width': '200',
            'Height': '30',
            'Top': '0',
            'Left': '0',
            'Outline': {
                'Value': '',
                'Display': 'none'
            },
            'DataFieldName': {
                'Value': 'Dropdown',
                'Display': 'grid'
            },
            'DataFieldType': {
                'Value': 'varchar(100)',
                'Display': 'grid'
            },
            'Content': {
                'Value': 'Dropdown',
                'Display': 'grid'
            },
            'Font': {
                'Value': 'Verdana',
                'Display': 'grid'
            },
            'FontColor': {
                'Value': '#2FF10E',
                'Display': 'grid'
            },
            'FontBold': {
                'Value': '0',
                'Display': 'grid'
            },
            'BackColor': {
                'Value': '#ADA07E',
                'Display': 'grid'
            },
            'ImagePath': {
                'Value': 'NA',
                'Display': 'grid'
            },
            'DefaultSelectText': {
                'Value': '-- Select --',
                'Display': 'grid'
            },
            'Enumerations': {
                'Value': 'item1,item2,item3,item4',
                'Display': 'grid'
            },
            'SelectEnumerations': {
                'Value': ['item2', 'item4'],
                'Display': 'grid'
            }
        },

        {
            'FieldID': '-1',
            'DesignID': '-1',
            'Name': 'Listbox',
            'Type': 'LISTBOX',
            'Width': '125',
            'Height': '100',
            'Top': '0',
            'Left': '0',
            'Outline': {
                'Value': '',
                'Display': 'none'
            },
            'DataFieldName': {
                'Value': 'Listbox',
                'Display': 'grid'
            },
            'DataFieldType': {
                'Value': 'varchar(100)',
                'Display': 'grid'
            },
            'Content': {
                'Value': 'Listbox',
                'Display': 'grid'
            },
            'Font': {
                'Value': 'Verdana',
                'Display': 'grid'
            },
            'FontColor': {
                'Value': '#2FF10E',
                'Display': 'grid'
            },
            'FontBold': {
                'Value': '0',
                'Display': 'grid'
            },
            'BackColor': {
                'Value': '#ADA07E',
                'Display': 'grid'
            },
            'ImagePath': {
                'Value': 'NA',
                'Display': 'grid'
            },
            'DefaultSelectText': {
                'Value': '',
                'Display': 'grid'
            },
            'Enumerations': {
                'Value': 'item1,item2,item3,item4',
                'Display': 'grid'
            },
            'SelectEnumerations': {
                'Value': ['item2', 'item4'],
                'Display': 'grid'
            }
        }
    ];


    $scope.list4 = [];

    $scope.aaa = "1,2,4";


    $scope.csValue = '7,1,2';
    $scope.csString = "1,2,3,4,5,6,7,8,9,10";

    $scope.alertme = function (msg) {

        alert(msg);
    }

    $scope.select = function (item, $evnt) {
        var currElem = $evnt.target;
        if (currElem) {


            $scope.removeOutlineFromAddedControls();

            var top = currElem.style.top.replace('px', '');
            item.Top = top;

            var left = currElem.style.left.replace('px', '');
            item.Left = left;

            item.Outline.Value = "3px dotted black";
        }
        $scope.selectedControl = item;

        $scope.status = "Control is selected";
    };

    // this method resets the 'Outline' property of all the added controls
    $scope.removeOutlineFromAddedControls = function () {
        angular.forEach($scope.list4, function (value, key) {
            value.Outline.Value = "";
        });
    }

    // method deletes the selected contrtol
    $scope.deleteSelectedControl = function () {
        var $selectIndex = $scope.list4.indexOf($scope.selectedControl);
        $scope.list4.splice($selectIndex, 1);
    }

    //
    $scope.copySelectedControl = function () {
        $scope.copiedItem = angular.copy($scope.selectedControl);
        $scope.copiedItem.Top = 0;
        $scope.copiedItem.Left = 0;
    }

    $scope.pasteSelectedControl = function () {
        if ($scope.copiedItem != null) {
            $scope.tempCopyItem = angular.copy($scope.copiedItem); // to avoid reference issues
            $scope.list4.push($scope.tempCopyItem);
            //$scope.copiedItem = null;
        }
    }

    $scope.hideMe = function () {
        return $scope.list4.length > 0;
    }

    $scope.saveDesign = function () {
        // Persist

        var htmlStr = angular.element(designGround).html();

        $scope.status = "The design is saved in the storage";

        $localStorage.model = $scope.list4;
        $localStorage.templateData = $scope.list4;

    }

    

    $scope.launchDesign = function () {

        //var designGroundElem = angular.element(designGround);

        //var htmlStr = $localStorage.modelHtml;

        //designGroundElem.append(htmlStr);

        //$scope.list4 = $localStorage.model;

        $localStorage.templateData = $scope.list4;
        $scope.templateData = $scope.list4;
        $scope.status = "The design is launched.";

        $window.open("ReportTemplate.html");

        //alert('hi');
        //$scope.list4 = "[{\"Name\":\"Label0\",\"Type\":\"LABEL\",\"Content\":\"Company Name\",\"Width\":\"150\",\"Height\":\"10\"}]";
        //"[{'Name':'Label0','Type':'LABEL','Content':'Company Name','Width':'150','Height':'10'},{'Name':'Textbox1','Type':'TEXTBOX','Content':'Suthra','Width':'150','Height':'10'},{'Name':'Button2','Type':'BUTTON','Content':'Submit','Width':'100','Height':'30'}]";
    }

    $scope.clearCache = function () {
        $scope.status = "Local storage data is cleared.";
        $localStorage.$reset();
    }

    $scope.fileSelect = function ($evnt) {
        //var fileName = $evnt.target.files;
    }

    $scope.file_changed = function (element) {

        //var fileName = element.files[0].name;

        //if ($scope.selectedControl){
        //    $scope.selectedControl.ImagePath = fileName;
        //    var imagePathTxtElem = angular.element(imagePathTxt);
        //    imagePathTxtElem.value = fileName;
        //}

        // $scope.$apply(function(scope) {
        // var photofile = element.files[0];
        // var reader = new FileReader();
        // reader.onload = function(e) {
        // // handle onload
        // };
        // reader.readAsDataURL(photofile);
        // });
    }

    







    // TODO: check can we have another controller file of the same name (like partial class in c#)
    $scope.callInitialServices = function () {

        if ($localStorage.form_template_design_DataCollection != null) {
            $copiedDesigns = angular.copy($localStorage.form_template_design_DataCollection);
            getFormTemplateMasterDetails($copiedDesigns, $localStorage.formTemplateMasterId);

            // Clear local stroage
            $localStorage.form_template_design_DataCollection = null;
            $localStorage.formTemplateMasterId = null;
        } else {

            // clients dropdown binding
            getAllClientsService();

            // depts dropdown binding
            getAllDepartmentsService();

            // surveytypes dropdown binding
            getAllSurveyTypesService();
        }
    }

    getFormTemplateMasterDetails = function ($copiedDesigns, templateMasterId) {
        alert('templateMasterId: ' + templateMasterId);
        $http.get('/api/FormTemplateMaster/' + templateMasterId).
                then(function (response) {
                    //alert("success" + response);

                    $scope.currentFormTemplateID = templateMasterId;
                    $scope.selectedClientId = response.data.client_ID;
                    $scope.selectedDepartmentId = response.data.department_ID;
                    $scope.selectedSurveyTypeId = response.data.survey_Type_ID;
                    $scope.formTemplateName = response.data.form_Template_Name;
                    $scope.surveyFormName = response.data.form_Entity;

                    getAllClientsService();
                    getAllDepartmentsService();
                    getAllSurveyTypesService();


                    angular.forEach($copiedDesigns, function (value, key) {

                        $elementModel = {
                            'FieldID': value.form_Field_ID,
                            'DesignID': value.form_Template_ID,
                            'Name': value.form_Field_Name,
                            'Type': value.form_Field_Type,
                            'Width': value.width,
                            'Height': value.height,
                            'Top': value.top,
                            'Left': value.left,
                            'Outline': {
                                'Value': '',
                                'Display': 'none'
                            },
                            'Content': {
                                'Value': value.content,
                                'Display': 'grid' // TODO: Move to DB 
                            },
                            'DataFieldName': {
                                'Value': value.data_Field_Name,
                                'Display': (value.data_Field_Name != null) ? 'grid' : 'none'
                            },
                            'DataFieldType': {
                                'Value': value.data_Field_Type,
                                'Display': (value.data_Field_Type != null) ? 'grid' : 'none'
                            },
                            'Font': {
                                'Value': value.font,
                                'Display': 'grid'
                            },
                            'FontColor': {
                                'Value': value.font_Color,
                                'Display': 'grid'
                            },
                            'FontBold': {
                                'Value': value.font_Bold,
                                'Display': 'grid'
                            },
                            'BackColor': {
                                'Value': value.background_Color,
                                'Display': 'grid'
                            },
                            'ImagePath': {
                                'Value': value.image_Path,
                                'Display': 'grid'
                            },
                            'DefaultSelectText': {
                                'Value': '-- Select --',
                                'Display': 'grid'
                            },
                            'Enumerations': {
                                'Value': value.enumerations,
                                'Display': 'grid'
                            },
                            'SelectEnumerations': {
                                'Value': [value.select_Items],
                                'Display': 'grid'
                            }
                        };

                        $scope.list4.push($elementModel);
                    });

                    $scope.designAreaDisplay = "grid";


                }, function (response) {
                    alert("failed in /clients GET call");
                }
            );
    }

    getAllClientsService = function () {
        $http.get('/api/clients').
                then(function (response) {
                    //alert("success" + response);

                    $scope.clientsSource = response.data;
                    if ($scope.selectedClientId == null)
                      $scope.selectedClientId = response.data[0].client_ID;


                }, function (response) {
                    alert("failed in /clients GET call");
                }
            );
    }

    getAllDepartmentsService = function () {
        $http.get('/api/departments').
                then(function (response) {
                    //alert("success" + response);

                    $scope.departmentsSource = response.data;
                    if ($scope.selectedDepartmentId == null)
                      $scope.selectedDepartmentId = response.data[0].department_ID;


                }, function (response) {
                    alert("failed in /departments GET call");
                }
            );
    }

    getAllSurveyTypesService = function () {
        $http.get('/api/surveytypes').
                then(function (response) {
                    //alert("success" + response);

                    $scope.surveyTypesSource = response.data;
                    if ($scope.selectedSurveyTypeId == null)
                      $scope.selectedSurveyTypeId = response.data[0].survey_Type_ID;


                }, function (response) {
                    alert("failed in /surveytypes GET call");
                }
            );
    }

    $scope.currentFormTemplateID = -1;
    $scope.designAreaDisplay = "grid";
    saveFormTemplateMaster = function () {
        //alert('record save click');

        //var designAreaDiv = angular.element(designArea);


        $form_template_master_Data = {
            'form_Template_ID': $scope.currentFormTemplateID,
            'form_Template_Name': $scope.formTemplateName,
            'client_ID': $scope.selectedClientId,
            'department_ID': $scope.selectedDepartmentId, // TODO: try to bind the object to dropdown instead of this variable and then retrieve the ID
            'survey_Type_ID': $scope.selectedSurveyTypeId,
            'form_Entity': $scope.surveyFormName
        };

        $http.post('/api/FormTemplateMaster', $form_template_master_Data).
                then(function (response) {
                    //alert("success" + response);
                    $scope.currentFormTemplateID = response.data.form_Template_ID // TODO: come up with some good logic to persist this sensitive data
                    saveFormTemplateDesign();
                }, function (response) {
                    alert("failed in /FormTemplateMaster POST call");
                }
            );
    }

    $scope.saveFormTemplateMasterAndDesign = function () {
        saveFormTemplateMaster();
    }

    saveFormTemplateDesign = function () {

        // Define $form_template_design_DataCollection
        $form_template_design_DataCollection = [];

        // Read the designList 
        $designList = $scope.list4;

        // Iterate over designList and populate $form_template_design_Data
        angular.forEach($scope.list4, function (value, key) {
            value.Outline.Value = "";

            $form_template_design_Data = {
                'form_Field_ID': value.FieldID,
                'form_Template_ID': $scope.currentFormTemplateID,
                'form_Field_Name': value.Name,
                'form_Field_Type': value.Type,
                'data_Field_Name': (value.DataFieldName.Display == 'grid') ? value.DataFieldName.Value : null,
                'data_Field_Type': (value.DataFieldType.Display == 'grid') ? value.DataFieldType.Value : null,
                'field_Mandatory': false, // TODO: tbd
                'field_HistoryIdentifier': false, // TODO: tbd
                'content': value.Content.Value,
                'width': value.Width,
                'height': value.Height,
                'left': value.Left,
                'top': value.Top,
                'font': value.Font.Value,
                'font_Color': value.FontColor.Value,
                'font_Bold': value.FontBold.Value,
                'background_Color': value.BackColor.Value,
                'text_Placeholder': "Enter...", // TODO: tbd
                'rows': 5, // TODO: do we need, shouldn't we put TextArea data here?
                'enumerations': value.Enumerations.Value,
                'select_Items': angular.toJson(value.SelectEnumerations.Value),
                'image_Alternate_Text': "img_alt_txt?", // TODO: tbd
                'image_Path': value.ImagePath.Value,
                'complex_Type_Name': "complex_Type_Name?", // TODO: 
                'display_Name': "disp_name?" // TODO: 
            };

            $form_template_design_DataCollection.push($form_template_design_Data);

        });

        // Call service
        $http.post('/api/FormTemplateDesign', $form_template_design_DataCollection).
                then(function (response) {
                    $scope.status = "The design is saved into the DATABASE";
                    alert("The design is saved into the DATABASE");
                }, function (response) {
                    $scope.status = "The design is FAILED to save into the DATABASE";
                    alert("failed in /FormTemplateDesigns POST call");
                }
            );

    }

});