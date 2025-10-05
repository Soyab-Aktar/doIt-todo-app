import Swal from 'sweetalert2';

// Simple breakpoint detection
const getToastPosition = () => {
  const width = window.innerWidth;
  
  if (width < 640) return 'top'; // Mobile
  if (width < 1024) return 'top'; // Tablet
  return 'top'; // Desktop
};

// Toast configuration
const Toast = Swal.mixin({
  toast: true,
  position: getToastPosition(),
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  background: '#202127',
  color: '#fff',
  customClass: {
    popup: '!bg-[#202127] !border-gray-900 !border !rounded-md !shadow-xl',
    title: '!text-sm !font-medium !m-0',
    timerProgressBar: '!bg-gradient-to-r !from-purple-500 !to-pink-500 !h-1'
  },
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer);
    toast.addEventListener('mouseleave', Swal.resumeTimer);
  }
});

// ============= TOAST NOTIFICATIONS =============

// Success Toast
export const showSuccessToast = (message) => {
  Toast.fire({
    icon: 'success',
    title: message,
    customClass: {
      popup: '!bg-[#202127] !border-gray-900 !border !rounded-md !shadow-xl',
      icon: '!text-green-500 !border-green-500'
    }
  });
};

// Warning Toast
export const showWarningToast = (message) => {
  Toast.fire({
    icon: 'warning',
    title: message,
    customClass: {
      popup: '!bg-[#202127] !border-gray-900 !border !rounded-md !shadow-xl',
      icon: '!text-orange-500 !border-orange-500'
    }
  });
};

// ============= MODAL BOXES/DIALOGS =============

// Success Modal
export const showSuccessModal = (title, message) => {
  return Swal.fire({
    title: title,
    text: message,
    icon: 'success',
    showConfirmButton: true,
    confirmButtonText: 'OK',
    background: '#202127',
    color: '#fff',
    customClass: {
      popup: '!bg-[#202127] !border-gray-900 !border !rounded-md !shadow-xl',
      title: '!text-lg !font-semibold !text-white !mb-3',
      htmlContainer: '!text-gray-300 !text-sm',
      // Updated: Background color #1B1B1F with gray-800 border
      confirmButton: '!bg-[#1B1B1F] !cursor-pointer !text-white !border !border-gray-800 !rounded-md !px-4 !py-2 !text-xs !font-medium !transition-colors !hover:bg-gray-800',
      icon: '!text-green-500 !border-green-500'
    },
    buttonsStyling: false
  });
};

// Confirmation Modal
export const showConfirmModal = ({
  title = 'Are you sure?',
  text = '',
  confirmButtonText = 'Yes, do it!',
  cancelButtonText = 'Cancel'
}) => {
  return Swal.fire({
    title,
    text,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText,
    cancelButtonText,
    reverseButtons: true,
    background: '#202127',
    color: '#fff',
    customClass: {
      popup: '!bg-[#202127] !border-gray-900 !border !rounded-md !shadow-xl',
      confirmButton: '!bg-[#1B1B1F] !cursor-pointer !text-white !border !border-gray-800  !rounded-md !px-4 !py-2 !text-xs !font-medium !transition-colors !hover:bg-gray-800',
      cancelButton: '!bg-red-900 !cursor-pointer !bg-opacity-50 !text-red-100 !border !border-red-400 !rounded-md !px-4 !py-2 !text-xs !font-medium !transition-colors !hover:bg-red-600 !hover:bg-opacity-60 !mr-2',
      title: '!text-lg !font-semibold !text-white !mb-3',
      htmlContainer: '!text-gray-300 !text-sm',
      icon: '!text-orange-500 !border-orange-500'
    },
    buttonsStyling: false
  });
};

// Close SweetAlert2
export const closeSwal = () => {
  Swal.close();
};
