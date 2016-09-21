angular.module("Calculator", []).controller("MyCalculator", function MyCalculator($scope) {
		$scope.displayValue = "0";
		$scope.firstValue = 0;
		$scope.secondValue = 0;
		$scope.minusSign = "";
		$scope.count = 0;
		
		$scope.myValue = function(v) {
		if($scope.count == 0) {
		$scope.displayValue = "";
		$scope.count = 1;
		}
		
		switch(v) {
		case '0':
		$scope.secondValue = 0;
		$scope.displayValue = $scope.displayValue + "0";
		break;
		case '1':
		$scope.secondValue = 1;
		$scope.displayValue = $scope.displayValue + "1";
		break;
		case '2':
		$scope.secondValue = 2;
		$scope.displayValue = $scope.displayValue + "2";
		break;
		case '3':
		$scope.secondValue = 3;
		$scope.displayValue = $scope.displayValue + "3";
		break;
		case '4':
		$scope.secondValue = 4;
		$scope.displayValue = $scope.displayValue + "4";
		break;
		case '5':
		$scope.secondValue = 5;
		$scope.displayValue = $scope.displayValue + "5";
		break;
		case '6':
		$scope.secondValue = 6;
		$scope.displayValue = $scope.displayValue + "6";
		break;
		case '7':
		$scope.secondValue = 7;
		$scope.displayValue = $scope.displayValue + "7";
		break;
		case '8':
		$scope.secondValue = 8;
		$scope.displayValue = $scope.displayValue + "8";
		break;
		case '9':
		$scope.secondValue = 9;
		$scope.displayValue = $scope.displayValue + "9";
		break;
		case '.':
		$scope.displayValue = $scope.displayValue + ".";
		break;
		case '+':
		$scope.displayValue = $scope.displayValue + "+";
		break;
		case '-':
		$scope.minusSign = "-"
		$scope.displayValue = $scope.displayValue + "-";
		break;
		case '*':
		$scope.displayValue = $scope.displayValue + "*";
		break;
		case '/':
		$scope.displayValue = $scope.displayValue + "/";
		break;
		case '^':
		$scope.firstValue = $scope.displayValue;
		$scope.displayValue = $scope.displayValue + "^";
		break;
		default:
		}
		}
		
		
		$scope.calcResult = function() {
		if($scope.displayValue.charAt(1) == '^') {
        $scope.displayValue = Math.pow($scope.firstValue , $scope.minusSign + $scope.secondValue);
		$scope.minusSign = "";
		} else {
		$scope.displayValue = $scope.$eval($scope.displayValue);
		}
		}
		
		$scope.clearDisplay = function() {
		$scope.displayValue = "0";
		$scope.minusSign = "";
		$scope.firstValue = 0;
		$scope.secondValue = 0;
		$scope.count = 0;
		}
		
		$scope.calcSqrt = function() {
		if(parseFloat($scope.displayValue) < 0) {
		$scope.displayValue = "Error";
		} else {
		$scope.displayValue = Math.sqrt(parseFloat($scope.displayValue));
		}
		}
		
		});