var main = require(process.argv[3]);
const {
    checkForWalls,
    createWallObject,
    parseMovement,
    checkInputs
  } = require("../helperFunctions");


describe( "pacman", function () {
    var arrayEquality = function(first, second){
        count = 0;
        for (i = 0; i < second.length; i++) {
            if(parseInt(second[i]) == parseInt(first[i])){
                count = count + 1;
            }
        }
        return (count == 3);
    }
    beforeEach(function () {
        jasmine.addCustomEqualityTester(arrayEquality);
    });

    it("traverses generic.txt", function () {
        expect(main.pacman("generic.txt")).toEqual([6,1,27]);
    });

    it("doesn't run for edge.txt", function () {
        expect(main.pacman("edge.txt")).toEqual([-1,-1,0]);
    });

    it("traverses runtime.txt", function () {
        expect(main.pacman("runtime.txt")).toEqual([2142,147,148]);
    });
    it("checks to see if there is a wall at the next destination", function (){
        expect(checkForWalls([10,10],{"2 1":true,"3 4":true},[3,4])).toBe(false)
    });
   
    it('Check Inputs checks the inputs and determines whether they are validfunction',function(){
        expect(checkInputs([10,10],[9,9],'WESNWESN')).toBe(true)
    })
    it('it properly fails if the boardSize is invalid', function(){
        expect(checkInputs([-1,10],[9,9],"WESN")).toBe(false)
    })
    it('it properly fails if the initial position does not have 2 values', function(){
        expect(checkInputs([-1,10],[15,15],"WESN")).toBe(false)
    })
    it('it properly fails if the initial position does not have 2 values', function(){
        expect(checkInputs([10,10],[12],"WESN")).toBe(false)
    })

    
});
