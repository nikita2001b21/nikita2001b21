let userType;
userType = "Batch1",  "securityGuard ", 'Batch2', 'Staff';
let whereToGo = 'Batch2'

// userType = 'Batch1';

switch (true) {
    case whereToGo == 'securityGuard':
        console.log('Please go to security office');
        break;

    case whereToGo == 'Kitchen':
        console.log('please go kitchen department');
        break;

    case whereToGo == 'Batch1':
        console.log(' Please go to ground floor');
        break;

    case whereToGo == 'Batch2':
        console.log('Please go to first floor');
        break;

    case whereToGo == 'Staff':
        console.log('Please sit anywhere.');

}