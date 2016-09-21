describe('Testing Calculator App', function(){
	describe('Testing AngularJS Controller', function() {
		
		it('should initialize variables', function() {
			module('Calculator');
			
			var scope = {};
			var ctrl;
			
			inject(function($controller) {
				ctrl = $controller('MyCalculator', {$scope:scope});
			});
			
			scope.clearDisplay();
			expect(scope.displayValue).toBe("0");
			//expect(scope.displayValue).toBe("1"); //Wrong Case
			expect(scope.firstValue).toBe(0);
			expect(scope.secondValue).toBe(0);
			expect(scope.minusSign).toBe("");
			expect(scope.count).toBe(0);
		});
		
		
		it('should display 2+4', function() {
			module('Calculator');
			
			var scope = {};
			var ctrl;
			
			inject(function($controller) {
				ctrl = $controller('MyCalculator', {$scope:scope});
			});
			
			scope.myValue('2');
			expect(scope.displayValue).toBe("2");
			scope.myValue('+');
			expect(scope.displayValue).toBe("2+");
			scope.myValue('4');
			expect(scope.displayValue).toBe("2+4");
			//expect(scope.displayValue).toBe("1+41"); //Wrong Case
		   
		});
		
		it('should should calculate square root', function() {
			module('Calculator');
			
			var scope = {};
			var ctrl;
			
			inject(function($controller) {
				ctrl = $controller('MyCalculator', {$scope:scope});
			});
			
			scope.myValue('-');
			expect(scope.displayValue).toBe("-");
			scope.myValue('6');
			expect(scope.displayValue).toBe("-6");
			scope.calcSqrt();
			expect(scope.displayValue).toBe("Error");
			
			scope.clearDisplay();

			scope.myValue('9');
			expect(scope.displayValue).toBe("9");
			scope.calcSqrt();
			expect(scope.displayValue).toBe(3);
			
			scope.clearDisplay();
			
			scope.myValue('1');
			scope.myValue('4');
			scope.myValue('4');
			expect(scope.displayValue).toBe("144");
			scope.calcSqrt();
			expect(scope.displayValue).toBe(12);
		});
		
		it('should calculate x power n', function() {
			module('Calculator');
			
			var scope = {};
			var ctrl;
			
			inject(function($controller) {
				ctrl = $controller('MyCalculator', {$scope:scope});
			});
			
			scope.myValue('2');
			expect(scope.displayValue).toBe("2");
			scope.myValue('^');
			expect(scope.displayValue).toBe("2^");
			scope.myValue('4');
			expect(scope.displayValue).toBe("2^4");
			scope.calcResult();
			expect(scope.displayValue).toBe(16);
			
		   
		});
	});
});
	
	